import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CategoryPage() {
  const { slug } = useParams();

  const [category, setCategory] = useState(null);
  const [concepts, setConcepts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategory();
  }, [slug]);

  async function fetchCategory() {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/categories/${slug}`
      );

      setCategory(res.data.category);
      setConcepts(res.data.concepts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading)
    return <h2 className="p-10 text-center">Loading...</h2>;

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">

      <h1 className="text-4xl font-bold mb-3">
        {category?.title}
      </h1>

      <p className="text-gray-600 mb-10">
        {category?.description}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {concepts.map((concept) => (

          <Link
            key={concept._id}
            to={`/concepts/${concept.slug}`}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >

            <h2 className="text-2xl font-semibold mb-3">
              {concept.title}
            </h2>

            <p className="text-gray-600">
              {concept.excerpt}
            </p>

            <div className="mt-5 flex gap-3">

              <span className="text-sm bg-blue-100 px-3 py-1 rounded">
                {concept.difficulty}
              </span>

              <span className="text-sm bg-gray-100 px-3 py-1 rounded">
                {concept.readingTime} mins
              </span>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}
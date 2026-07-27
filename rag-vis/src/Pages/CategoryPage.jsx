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
    const res1 = await axios.get(
      `https://ai-visualizer-website-1.onrender.com/api/categories/${slug}`
    );

    const res2 = await axios.get(
      `https://ai-visualizer-website-1.onrender.com/api/categories/${slug}/concepts`
    );

    console.log("Category:", res1.data);
    console.log("Concepts:", res2.data);

    setCategory(res1.data.data);

    setConcepts(res2.data.data || []);

  } catch (err) {
    console.error("API Error:", err);
  } finally {
    setLoading(false);
  }
}

  if (loading)
    return <h2 className="p-10 text-center">Loading...</h2>;

  if (!category)
    return (
      <h2 className="p-10 text-center">
        Category not found
      </h2>
    );

  return (
    <div className="max-w-7xl mx-auto m-8 px-16 py-10">

      <h1 className="text-4xl font-bold mb-3">
        {category.title}
      </h1>

      <p className="text-gray-600 mb-10">
        {category.description}
      </p>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {concepts.length === 0 ? (
          <p className="text-gray-500">
            No concepts available yet.
          </p>
        ) : (

          concepts.map((concept) => (

            <Link
              key={concept._id}
              to={`/concept/${concept.slug}`}
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

          ))

        )}

      </div>

    </div>
  );
}
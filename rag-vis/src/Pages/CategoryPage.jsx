import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/app";
import ConceptCard from "../components/ConceptCard";

export default function CategoryPage() {

  const { slug } = useParams();

  const [concepts, setConcepts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchConcepts() {

      try {

        const res = await api.get(
          `/categories/${slug}/concepts`
        );

        setConcepts(res.data.data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    }

    fetchConcepts();

  }, [slug]);

  if (loading)
    return <h1>Loading...</h1>;

  return (

    <div className="max-w-7xl mx-auto py-10">

      <h1 className="text-4xl font-bold mb-8">
        Concepts
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {concepts.map((concept) => (

          <ConceptCard
            key={concept._id}
            concept={concept}
          />

        ))}

      </div>

    </div>

  );

}
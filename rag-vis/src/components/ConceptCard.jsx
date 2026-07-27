import { useNavigate } from "react-router-dom";

export default function ConceptCard({ concept }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/concept/${concept.slug}`)}
      className="cursor-pointer rounded-xl border p-6 hover:shadow-xl transition"
    >
      <h2 className="text-xl font-bold">
        {concept.title}
      </h2>

      <p className="mt-3 text-gray-500">
        {concept.excerpt}
      </p>

      <div className="mt-5">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Read Article
        </button>
      </div>
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/categories/${category.slug}`)}
      className="cursor-pointer rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-lg hover:shadow-2xl transition"
    >
      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-blue-100">
        🧠
      </div>

      <h2 className="mt-5 text-2xl font-bold">
        {category.title}
      </h2>

      <p className="mt-3 text-gray-500">
        {category.description}
      </p>

      <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2">
        Explore
        <ArrowRight size={18}/>
      </button>
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/categories/${category.slug}`)}
      className="cursor-pointer rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 dark:bg-slate-800 text-3xl">
        🧠
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
        {category.title}
      </h2>

      {/* Description */}
      <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
        {category.description}
      </p>

      {/* Button */}
      <button
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 font-medium transition"
      >
        Explore
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
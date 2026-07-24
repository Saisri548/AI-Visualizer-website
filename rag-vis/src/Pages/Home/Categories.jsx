import { useEffect, useState } from "react";
import api from "../../api/app";
import CategoryCard from "../../components/Categories/CategoryCard";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-blue-600 dark:text-cyan-400">
            AI CATEGORIES
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Explore AI Concepts
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Choose a topic to explore interactive visualizations,
            simulations, documentation, and real-world AI workflows.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gray-50 dark:bg-slate-950 transition-colors duration-300 px-6">
      <div className="max-w-5xl text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full bg-blue-100 dark:bg-slate-800 px-4 py-2 text-sm font-medium text-blue-600 dark:text-cyan-400"
        >
          🚀 Learn • Visualize • Experiment
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI Concepts
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">
            Playground
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400"
        >
          Learn modern AI concepts like{" "}
          <span className="font-semibold text-blue-600 dark:text-cyan-400">
            LLMs
          </span>
          ,{" "}
          <span className="font-semibold text-blue-600 dark:text-cyan-400">
            RAG
          </span>
          ,{" "}
          <span className="font-semibold text-blue-600 dark:text-cyan-400">
            AI Agents
          </span>
          ,{" "}
          <span className="font-semibold text-blue-600 dark:text-cyan-400">
            MCP
          </span>
          , Vector Databases, Prompt Engineering, and more through
          interactive visualizations, simulations, and beginner-friendly
          documentation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/categories")}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-8 py-3 font-semibold text-white shadow-lg transition"
          >
            Explore Concepts
            <ArrowRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-8 py-3 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            Start Experimenting
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
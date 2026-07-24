import { Brain, Eye, Code } from "lucide-react";

export default function About() {
  const points = [
    {
      icon: <Brain size={35} />,
      title: "Learn AI Concepts",
      desc: "Understand LLMs, RAG, AI Agents, MCP, Prompt Engineering, and Generative AI through simple explanations.",
    },
    {
      icon: <Eye size={35} />,
      title: "Visual Learning",
      desc: "Complex AI architectures are explained with interactive diagrams, animations, and intuitive visualizations.",
    },
    {
      icon: <Code size={35} />,
      title: "Experiment",
      desc: "Learn by experimenting with AI pipelines, simulations, and hands-on interactive demos.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 px-6 py-28">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-blue-600 dark:text-cyan-400">
            ABOUT US
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About AI Visualizer
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            AI Visualizer is an interactive learning platform designed to make
            complex Artificial Intelligence concepts easier to understand
            through visual explanations, simulations, documentation, and
            real-world examples.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {points.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400">
                {item.icon}
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h2>

              <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
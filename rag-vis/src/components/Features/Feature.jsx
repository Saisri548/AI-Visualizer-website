import {
  Cpu,
  Database,
  Bot,
  Workflow,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Cpu size={40} />,
      title: "LLM Visualization",
      desc: "Explore tokens, transformers, context windows and model behaviour.",
    },
    {
      icon: <Database size={40} />,
      title: "RAG Simulator",
      desc: "Visualize embeddings, vector databases, retrieval and generation.",
    },
    {
      icon: <Bot size={40} />,
      title: "AI Agent Explorer",
      desc: "Understand planning agents, tools, memory and workflows.",
    },
    {
      icon: <Workflow size={40} />,
      title: "Interactive Simulations",
      desc: "Learn AI systems by interacting with real pipeline simulations.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 px-6 py-28">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-blue-600 dark:text-cyan-400">
            FEATURES
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Platform Features
          </h1>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to understand modern AI systems through
            interactive learning and visualization.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 mt-16 md:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-cyan-400">
                {item.icon}
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
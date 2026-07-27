export default function CodeBlock({ children }) {
  return (
    <pre className="bg-slate-900 text-white p-4 rounded-xl overflow-auto">
      <code>{children}</code>
    </pre>
  );
}
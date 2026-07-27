export default function Sidebar({ sections }) {
  return (
    <aside className="sticky top-24">
      <div className="bg-white border rounded-xl p-5 shadow-sm">
        <h2 className="font-bold text-lg mb-4">Contents</h2>

        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-slate-600 hover:text-blue-600 transition"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
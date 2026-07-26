import {
  FileText,
  BookOpen,
  Globe,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

export default function ReferenceList({ references = {} }) {
  const sections = [
    {
      title: "Research Papers",
      icon: FileText,
      items: references.papers || [],
    },
    {
      title: "Books",
      icon: BookOpen,
      items: references.books || [],
    },
    {
      title: "Official Documentation",
      icon: GraduationCap,
      items: references.documentation || [],
    },
    {
      title: "Websites",
      icon: Globe,
      items: references.websites || [],
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          References
        </h2>

        <p className="mt-2 text-slate-500">
          Useful resources to continue your learning.
        </p>
      </div>

      <div className="space-y-10">

        {sections.map((section) => {

          const Icon = section.icon;

          if (!section.items.length) return null;

          return (

            <div key={section.title}>

              <div className="mb-5 flex items-center gap-3">

                <div className="rounded-lg bg-blue-100 p-2">
                  <Icon className="h-5 w-5 text-blue-700" />
                </div>

                <h3 className="text-xl font-semibold">
                  {section.title}
                </h3>

              </div>

              <div className="space-y-4">

                {section.items.map((item, index) => (

                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-400 hover:bg-blue-50"
                  >

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      {item.author && (
                        <p className="mt-1 text-sm text-slate-600">
                          {item.author}
                        </p>
                      )}

                    </div>

                    <ExternalLink className="h-5 w-5 text-slate-500" />

                  </a>

                ))}

              </div>

            </div>

          );
        })}

      </div>

    </section>
  );
}
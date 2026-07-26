import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default function MarkdownRenderer({ content = "" }) {
  return (
    <article
      className="
      prose
      prose-lg
      max-w-none
      prose-slate

      prose-headings:font-bold
      prose-headings:text-slate-900

      prose-h1:text-5xl
      prose-h2:text-3xl
      prose-h3:text-2xl

      prose-p:text-slate-700
      prose-p:leading-8

      prose-a:text-blue-600
      hover:prose-a:text-blue-800

      prose-strong:text-slate-900

      prose-code:text-pink-600

      prose-pre:bg-slate-900
      prose-pre:text-white
      prose-pre:rounded-xl

      prose-img:rounded-xl
      prose-img:shadow-lg

      prose-table:border
      prose-table:border-slate-200

      prose-th:bg-slate-100
      prose-th:p-3

      prose-td:p-3

      prose-blockquote:border-l-4
      prose-blockquote:border-blue-500
      prose-blockquote:bg-blue-50
      prose-blockquote:px-4
      prose-blockquote:py-2
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
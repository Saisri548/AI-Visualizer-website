import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

export default function MarkdownRenderer({ content }) {
  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none prose-slate
      prose-headings:font-bold
      prose-headings:text-slate-900
      prose-p:text-slate-700
      prose-strong:text-slate-900
      prose-li:text-slate-700
      prose-a:text-blue-600
      prose-img:rounded-xl
      prose-pre:rounded-xl
      prose-pre:bg-slate-900
      prose-code:text-pink-500">

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>

    </div>
  );
}
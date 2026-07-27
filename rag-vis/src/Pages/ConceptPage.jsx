import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github.css";

export default function ConceptPage() {
  const { slug } = useParams();

  const [concept, setConcept] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadConcept();
  }, [slug]);

  async function loadConcept() {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/concepts/${slug}`
      );

      setConcept(res.data.concept);
      setMarkdown(res.data.markdown);

    } catch (err) {
      console.error(err);

    } finally {
      setLoading(false);
    }
  }

  if (loading)
    return <h2 className="text-center p-10">Loading...</h2>;

  return (
    <div className="max-w-5xl mx-auto px-8 py-10">

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          {concept.title}
        </h1>

        <p className="text-gray-600 mt-3">
          {concept.excerpt}
        </p>

      </div>

      <article className="prose prose-lg max-w-none">

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {markdown}
        </ReactMarkdown>

      </article>

    </div>
  );
}
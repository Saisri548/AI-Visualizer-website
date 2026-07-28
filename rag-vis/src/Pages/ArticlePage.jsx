import { useParams } from "react-router-dom";

import useArticle from "../Hooks/useArticle";
import ArticleRenderer from "../components/article/ArticleRenderer";

export default function ArticlePage() {
  const { slug } = useParams();

const article = useArticle(slug);

console.log("Article in Page:", article);

  
    

  if (!article) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Article not found.
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <ArticleRenderer article={article} />
    </main>
  );
}
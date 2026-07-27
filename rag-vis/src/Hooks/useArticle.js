import { useEffect, useState } from "react";
import { getArticle } from "../services/articleService";

export default function useArticle(slug) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getArticle(slug);
      setArticle(data.article);
    }

    fetchData();
  }, [slug]);

  return article;
}
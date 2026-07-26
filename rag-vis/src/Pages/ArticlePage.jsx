import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/app";
import ArticleTemplate from "../components/article/ArticleTemplate";

export default function ArticlePage() {

  const { slug } = useParams();

  const [articleData, setArticleData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchArticle() {

      try {

        const res = await api.get(
          `/articles/${slug}`
        );

        setArticleData(res.data.data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    }

    fetchArticle();

  }, [slug]);

  if (loading)
    return <h1>Loading...</h1>;

  if (!articleData)
    return <h1>Article not found</h1>;

  return (

    <ArticleTemplate

      metadata={articleData.metadata}

      article={articleData.article}

      quiz={articleData.quiz}

      references={articleData.references}

      nextConcept={articleData.nextConcept}

    />

  );

}
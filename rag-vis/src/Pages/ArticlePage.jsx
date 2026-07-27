const { slug } = useParams();

const article = useArticle(slug);

return (
  <ArticleRenderer article={article} />
);
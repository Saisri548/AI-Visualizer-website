import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


export async function getArticle(slug) {

  // Step 1: Get concept details
  const conceptResponse = await api.get(
    `/concepts/${slug}`
  );


  const concept = conceptResponse.data.data;


  // Example:
  // markdown/large-language-models.md

  const markdownFile = concept.markdownUrl
    .split("/")
    .pop();


  // Step 2: Fetch markdown converted article
  const articleResponse = await api.get(
    `/markdown/${markdownFile}`
  );


  return articleResponse.data;

}
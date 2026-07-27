import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function getArticle(slug) {
  const res = await api.get(`/api/concepts/${slug}`); // adjust if needed
  return res.data;
}
import type { Article } from '../types/article';
import articlesA from '../data/articlesA.json';
import articlesB from '../data/articlesB.json';

export const getArticlesA = async (): Promise<Article[]> => {
  return articlesA;
};

export const getArticlesB = async (): Promise<Article[]> => {
  return articlesB;
};

// Fetch a single article by collection and ID
export const getArticleById = async (
  collection: 'A' | 'B',
  id: string
): Promise<Article | undefined> => {
  const articles = collection === 'A' ? articlesA : articlesB;
  return articles.find((article) => article.id === id);
};

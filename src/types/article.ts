export interface Article {
  id: string;
  title: { ja: string; en: string };
  body?: { ja: string; en: string };
  date: string;
  author: string;
  image?: string;
}

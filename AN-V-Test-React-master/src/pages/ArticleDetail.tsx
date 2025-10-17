import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getArticleById } from '../services/articleService';
import type { Article } from '../types/article';

interface Props {
  collection: 'A' | 'B';
}

const ArticleDetail: React.FC<Props> = ({ collection }) => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang: 'ja' | 'en' = (i18n.language === 'en' ? 'en' : 'ja');
  const [article, setArticle] = useState<Article | null>(null);
  const category = collection === 'A' ? i18n.t('top.media-announcements') : i18n.t('top.media-featured');

  useEffect(() => {
    if (id) {
      getArticleById(collection, id).then((a) => setArticle(a ?? null));
    }
  }, [id, collection]);

  if (!article) return <div>Loading...</div>;

  const image = article.image || '/dummy.png';

  return (
    <main className="article-detail-page">
      <div className="article-breadcrumbs"><Link to={collection === 'A' ? '/articlesA' : '/articlesB'}>{category}</Link><div className="arrow"></div><p>{article.title[lang]}</p></div>
      <h1>{article.title[lang]}</h1>
      <div className="article-content">
        {image && <img src={image} alt={article.title[lang]} className="article-image" />}
        <p className="article-meta">{article.date} | {article.author}</p>
        <div className="article-body">{article.body?.[lang]}</div>
      </div>
    </main>
  );
};

export default ArticleDetail;

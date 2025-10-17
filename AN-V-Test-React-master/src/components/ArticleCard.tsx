import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Article } from '../types/article';

interface Props {
  article: Article;
  collection: 'A' | 'B';
}

const ArticleCard: React.FC<Props> = ({ article, collection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'ja';
  const image = article.image || '/dummy.png';

  return (
    <div className="article-card">
      <Link to={`/articles/${collection}/${article.id}`}>
        <img src={image} alt={article.title[lang]} />
        <h3>{article.title[lang]}</h3>
        <p>{article.date} | {article.author}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;

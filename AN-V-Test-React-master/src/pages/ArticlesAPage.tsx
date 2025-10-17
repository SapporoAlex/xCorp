import React from 'react';
import { useTranslation } from 'react-i18next';
import ArticleCard from '../components/ArticleCard';
import articlesA from '../data/articlesA.json';

const ArticlesA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="articles-page">
      <h2 className="section-title">{t('articlesA.title')}</h2>
      <p className="section-description">{t('articlesA.description')}</p>

      <div className="articles-grid">
        {articlesA.map((article) => (
          <ArticleCard key={article.id} article={article} collection="A" />
        ))}
      </div>
    </main>
  );
};

export default ArticlesA;

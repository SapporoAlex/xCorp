import React from 'react';
import { useTranslation } from 'react-i18next';
import ArticleCard from '../components/ArticleCard';
import articlesB from '../data/articlesB.json';

const ArticlesB: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="articles-page">
      <h2 className="section-title">{t('articlesB.title')}</h2>
      <p className="section-description">{t('articlesB.description')}</p>

      <div className="articles-grid">
        {articlesB.map((article) => (
          <ArticleCard key={article.id} article={article} collection="B" />
        ))}
      </div>
    </main>
  );
};

export default ArticlesB;

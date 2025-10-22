import React from 'react';
import { useTranslation } from 'react-i18next';
import ArticleCard from '../components/ArticleCard';
import articlesB from '../data/articlesB.json';
import { Link } from 'react-router-dom';

const ArticlesB: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="articles-page">
      <div className="article-breadcrumbs"><Link to='/xCorp/'><p>{t('breadcrumbs.back')}</p></Link></div>
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

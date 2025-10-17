import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsentComponent from './components/CookieConsentComponent';

import TopPage from './pages/TopPage';
import StaffPage from './pages/StaffPage';
import PrivacyPolicy from './pages/PrivacyPolicyPage';
import ArticlesAPage from './pages/ArticlesAPage';
import ArticlesBPage from './pages/ArticlesBPage';
import ArticleDetail from './pages/ArticleDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/xCorp" element={<TopPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/articlesA" element={<ArticlesAPage />} />
          <Route path="/articlesB" element={<ArticlesBPage />} />
          <Route path="/articles/A/:id" element={<ArticleDetail collection="A" />} />
          <Route path="/articles/B/:id" element={<ArticleDetail collection="B" />} />
        </Routes>
        <CookieConsentComponent />
      </main>
      <Footer />
    </Router>
  );
};

export default App;

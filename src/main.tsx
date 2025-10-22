import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

import './i18n'; // <- import your i18n setup
import './index.css';
import './logo.css';
import './StaffGrid.css';
import './Articles.css';
import './ArticleDetail.css';
import './tumblex.css'
import './arrow.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

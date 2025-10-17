import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
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
    <App />
  </React.StrictMode>
);

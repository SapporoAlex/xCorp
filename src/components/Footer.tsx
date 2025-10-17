// src/components/Footer.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <h2>{ t("footer.title")}</h2>
    </footer>
  );
};

export default Footer;
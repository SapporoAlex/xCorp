import React from 'react';
import { useTranslation } from 'react-i18next';

const LangSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  // Languages to display
  const languages: { code: string; label: string }[] = [
    { code: 'ja', label: 'JA' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <div className="lang-switch">
      {languages.map((lang) => (
        <span
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          style={{
            fontWeight: i18n.language === lang.code ? 'bold' : 'normal',
            cursor: 'pointer',
            margin: '0 5px',
          }}
        >
          {lang.label}
        </span>
      ))}
    </div>
  );
};

export default LangSwitch;

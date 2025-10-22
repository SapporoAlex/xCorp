// src/components/Header.tsx
import React, { useState, useEffect, useRef } from "react";
import LangSwitch from './LangSwitch';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleTopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're already on the top page, prevent navigation and scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header>
      <div className="header-inner">
        <h1 className='header-logo'>X Corp.</h1>
        <div className="nav-bar-right">
          <nav className="u-pc-only">
            <HLink to="/xCorp/#top-section" onClick={handleTopClick}>{t('header.top')}</HLink> |{' '}
            <HLink smooth to="/xCorp/#about-section">{t('header.about')}</HLink> |{' '}
            <HLink smooth to="/xCorp/#staff-section">{t('header.staff')}</HLink> |{' '}
            <HLink smooth to="/xCorp/#media-section">{t('header.media')}</HLink> |{' '}
            <HLink smooth to="/xCorp/#contact-section">{t('header.contact')}</HLink>
          </nav>
          <nav className="u-sp-only">
            {/* Hamburger Button */}
            <button className={`nav-btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            {isOpen && (
              <div className="mobile-menu">
                <HLink to="/xCorp/#top-section" onClick={handleTopClick}>{t('header.top')}</HLink>
                <HLink smooth to="/xCorp/#about-section" onClick={() => setIsOpen(false)}>{t('header.about')}</HLink>
                <HLink smooth to="/xCorp/#staff-section" onClick={() => setIsOpen(false)}>{t('header.staff')}</HLink>
                <HLink smooth to="/xCorp/#media-section" onClick={() => setIsOpen(false)}>{t('header.media')}</HLink>
                <HLink smooth to="/xCorp/#contact-section" onClick={() => setIsOpen(false)}>{t('header.contact')}</HLink>
              </div>
            )}
            </nav>
          <LangSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CookieConsentComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <CookieConsent
      location="bottom"
      buttonText={t('cookie.accept', { defaultValue: "I Accept" })}
      cookieName="mySiteCookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
      enableDeclineButton
      declineButtonText={t('cookie.decline', { defaultValue: "No, thanks" })}
      onAccept={() => {
        console.log("User accepted cookies");
        // Example: Initialize analytics or other tracking scripts here
      }}
      onDecline={() => {
        console.log("User declined cookies");
      }}
    >
      {t('cookie.text', { defaultValue: "This website uses cookies to enhance your experience." })}
      {" "}
      <Link to="/privacy-policy" style={{ color: "#FFD700" }}>{t('cookie.learnMore', { defaultValue: "Learn more" })}</Link>
    </CookieConsent>
  );
};

export default CookieConsentComponent;
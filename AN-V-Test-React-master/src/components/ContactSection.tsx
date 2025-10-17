import React from "react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>(
    {
      name: "",
      email: "",
      message: "",
    }
  );

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <video className="contact-video" autoPlay muted loop>
        <source src="contact-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contact-overlay" />
        <div className="contact-title-area">
          <h2 className="section-title">{t('top.contact-title')}</h2>
          <p className="contact-text u-med-text">{t('top.contact-text')}</p>
        </div>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{ t("form.name")}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={ t("form.name-placeholder")}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{ t("form.email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={ t("form.email-placeholder")}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{ t("form.message")}</label>
          <textarea
            id="message"
            name="message"
            placeholder={ t("form.message-placeholder")}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button className="m-button" type="submit">{ t("form.send")}</button>

        {submitted && (
          <p style={{ color: "gold", marginTop: "10px" }}>
            { t("form.success")}
          </p>
        )}
      </form>
    </>
  );
};

export default ContactSection;

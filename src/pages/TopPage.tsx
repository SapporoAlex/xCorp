import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useInViewAnimation } from '/src/hooks/useInViewAnimation';
import Xlogo from '/src/components/Xlogo';
import StaffGrid from '/src/components/StaffGrid';
import ContactSection from '/src/components/ContactSection';
import staffData from '/src/data/staff.json';
import TumbleX from '../components/TumbleX';


const TopPage: React.FC = () => {
  const { t } = useTranslation();

  // Animation refs for media section
  const kvTitle = useInViewAnimation("u-from-left");
  const aboutSection = useInViewAnimation("u-fade-in");
  const staffSection = useInViewAnimation("u-fade-in");
  const mediaRowRight1 = useInViewAnimation("u-from-right");
  const mediaRowLeft = useInViewAnimation("u-from-left");
  const mediaRowRight2 = useInViewAnimation("u-from-right");
  const staffGrid = useInViewAnimation("u-from-bottom");
  const contactSection = useInViewAnimation("u-fade-in");

  return (
    <div className="top-page">
      <div className="kv">
        <div className="kv-left-box">
          <video className="kv-video" autoPlay muted loop>
            <source src="kv-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="kv-overlay" />
          <h1 ref={kvTitle} className="kv-title">{t('top.title')}</h1>
          <p className='kv-text u-serif-text'>{t('top.text')}</p>
        </div>
        <div className="kv-right-box">
        </div>
        <Xlogo />
      </div>

      <section ref={aboutSection} className="about" id="about-section">
        <div className='container'>
          <h2 className="section-title">{t('top.about-title')}</h2>
          <p className="u-big-text about-text-a">{t('top.about-text-a')}</p>
          <p className="u-big-text about-text-b">{t('top.about-text-b')}</p>
        </div>
      </section>

      {/* Fake LinkedIn Feed Section */}
      <section className="linkedin-feed" id="linkedin-feed-section">
        <h2 className="section-title linkedin-title">{t("top.linkedin-feed-title")}</h2>
        <div className="linkedin-feed-container">
          <div className="linkedin-post">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="linkedin-logo" style={{width:32, height:32, borderRadius:'4px', marginRight:8}} />
            <div>
              <strong>X Corp.</strong> <span style={{color:'#888', fontSize:'0.9em'}}>2 days ago</span>
              <p>Excited to announce our new AI-powered platform! 🚀 #innovation #AI</p>
            </div>
          </div>
          <div className="linkedin-post">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="linkedin-logo" style={{width:32, height:32, borderRadius:'4px', marginRight:8}} />
            <div>
              <strong>X Corp.</strong> <span style={{color:'#888', fontSize:'0.9em'}}>3 days ago</span>
              <p>Back from the convention! Cheers for the ride Elon 🚀 #Rockets #AI</p>
            </div>
          </div>
          <div className="linkedin-post">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="linkedin-logo" style={{width:32, height:32, borderRadius:'4px', marginRight:8}} />
            <div>
              <strong>X Corp.</strong> <span style={{color:'#888', fontSize:'0.9em'}}>5 days ago</span>
              <p>We’re hiring! Join our team of innovators. <a href="#" style={{color:'#0077b5'}}>See jobs</a></p>
            </div>
          </div>
        </div>
      </section>

      <section ref={staffSection} className="staff">
        <video className="staff-video" autoPlay muted loop>
          <source src="staff-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="staff-overlay" />
        <div className="container staff-container">
          <div className="side-a">
            <h2 className="section-title">{t('top.staff-title')}</h2>
            <p className='u-med-text'>{t('top.staff-text')}</p>
            <Link className="m-button" to="/staff">{t('top.staff-button')}</Link>
          </div>
          <div ref={staffGrid} className="side-b top-page-staff">
            <StaffGrid staffMembers={staffData} />
          </div>

        </div>

      </section>

      <section className="media" id="media-section">
        <div className="title-row" ref={mediaRowRight1}>
          <h2 className="media-text u-huge-text">{t('top.media-title-a')}</h2>
          <img className="title-row-img" src='/xCorp/media-01.jpeg'></img>
          <h2 className="media-text u-huge-text">{t('top.media-title-b')}</h2>
        </div>
        <div className="title-row" ref={mediaRowLeft}>
          <img className="title-row-img" src='/xCorp/media-02.jpeg'></img>
          <h2 className="media-text u-huge-text">{t('top.media-title-c')}</h2>
          <img className="title-row-img" src='/xCorp/media-03.jpeg'></img>
        </div>
        <div className="title-row" ref={mediaRowRight2}>
          <h2 className="media-text u-huge-text">{t('top.media-title-d')}</h2>
        </div>
        <div className="media-pair">
          <div className="side-a">
            <h3 className="u-med-text">{t('top.media-announcements')}</h3>
            <Link className="m-button" to="/articlesA">{t('top.media-button')}</Link>
          </div>
          <TumbleX></TumbleX>
          <div className="side-b">
            <h3 className="u-med-text">{t('top.media-featured')}</h3>
            <Link className="m-button" to="/articlesB">{t('top.media-button')}</Link>
          </div>
        </div>
      </section>
      <section ref={contactSection} className="contact" id="contact-section">
        <ContactSection></ContactSection>
      </section>
    </div>
  );
};

export default TopPage;

import {React} from 'react';
import group1 from '../../assets/group1.png';
import './We.css';
const We = () => {
    
  return (
    <section
      className="about-section">
      <div className="about-content d-flex justify-content-between align-items-center">
        
        <div className="left-side">
          <img 
            src={group1} 
            alt="About Us" 
            className="about-image"
          />
        </div>
        <div className="right-side">
          <h1 className="about-heading fade-in-right">
          Who Are We?
          </h1>
          <h3 className="fade-in-up">Award-Winning IT Software Company to Deliver Unmatched Excellence</h3>
          <p className="about-subheading fade-in-up">
          Ahaan Software Consulting  is a certified  QRA, ISO 9001 company with a team of highly expert cloud engineers, software engineers, UX/UI designers, and cybersecurity specialists. Our clients are happy . We offer a broad range of IT services that meet clients’ needs.
          </p>
          <p className="about-subheading fade-in-left">
          Our comprehensive process begins with branding and product discovery for mobile and web app development, user experience development, style guide creation, quality control, server maintenance, user acceptance testing, application launch, digital marketing, and SEO. Our team is committed to satisfying our clients.
          </p>
        </div>
      </div>
    </section>
    
  );
};

export default We;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-header">
          <div className="footer-logo">
            <h2>Yo<span>Learn.ai</span></h2>
            <p>AI powered learning. Beyond Limits.</p>
            <div className="footer-icons">
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-telegram"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-pinterest"></i></a>
            </div>
          </div>
          <div className="footer-about">
            <h3>Empowering Learning with AI –<br/> For Students, Teachers & Institutions</h3>
            <p>
              YoLearn.ai is an AI-powered learning platform designed to enhance
              education for students, teachers, and institutions across the globe.
              From personalized AI tutors to school-wide curriculum tools – YoLearn
              makes education smarter and more accessible.
            </p>
            <p>
              ✅ ISO Certified &nbsp;&nbsp;
              📘 NEP-Aligned &nbsp;&nbsp;
              🛡️ Data Privacy Compliant
            </p>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Sitemap</h4>
            <p>Tools</p>
            <p>Studios</p>
            <p>Assistants</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Career</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Legal</h4>
            <p>Terms & conditions</p>
            <p>Privacy Policy</p>
            <p>Data Policy</p>
          </div>
          <div>
            <h4>Socials</h4>
            <p>X (Twitter)</p>
            <p>LinkedIn</p>
            <p>YouTube</p>
            <p>WhatsApp Channel</p>
          </div>
          <div>
            <h4> </h4>
            <p>For Students</p>
            <p>For Teachers</p>
            <p>For Schools</p>
            <p>For Organizations</p>
            <p>Resources</p>
            <p>Pricing</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          All educational content, AI tutors, and institutional tools are intended
          for learners of appropriate age groups and verified educator use.
          YoLearn.ai follows national and international education safety standard.
        </p>
        <div className="footer-bottom-links">
          <p>©️ 2025 AI.YoLearn Private Limited. All rights reserved.</p>
          <div className="footer-policy-links">
            <p>Terms of Use</p>
            <p>Cookie Policy</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
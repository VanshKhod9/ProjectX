import React from "react";
import "./Main.css";
import curve1 from "../../assets/curve1.svg";
import curve2 from "../../assets/curve2.svg";
import profilephoto from "../../assets/profilephoto.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="left">
          <p className="tagline">PLAN</p>
          <h1>Your AI Teaching Assistants Team</h1>
          <p className="subtitle">
            Smarter planning. Effortless teaching. Exponential impact.
          </p>
          <p className="description">
            Unlock the power of AI for personalized lesson planning, resource
            creation, classroom management, and student support — all in one
            intelligent workspace.
          </p>
          <div className="buttons">
            <button className="btn primary">Get started for free →</button>
            <button className="btn secondary">Explore Now</button>
          </div>
        </div>

        <div className="right">
          <div className="circle-bg">
            <img
              src={profilephoto}
              alt="Teacher"
              className="profile-img"
            />
          </div>
        </div>
      </div>

      <div className="curve-section">
        <img src={curve1} alt="Curve background" className="curve-bg" />

        <div className="overlay-content">
          <h2>Built for Teachers. Powered by AI. Trusted by Schools.</h2>
          <p>
            Any Country, Any curriculum/board, Any Language - Global Platform -
            Localized solution
          </p>

          <div className="badges">
            <div className="badge">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/globe.png"
                alt="Global"
                className="badge-icon"
              />
              <span>Global Platform</span>
            </div>
            <div className="badge">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/translate.png"
                alt="Localized"
                className="badge-icon"
              />
              <span>Localized Content</span>
            </div>
            <div className="badge">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/school.png"
                alt="K-12"
                className="badge-icon"
              />
              <span>K-12 Coverage</span>
            </div>
            <div className="badge">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/open-book.png"
                alt="Curriculums"
                className="badge-icon"
              />
              <span>All Major Curriculums</span>
            </div>
            <div className="badge">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/speech-bubble.png"
                alt="Multilingual"
                className="badge-icon"
              />
              <span>Multilingual Support</span>
            </div>
          </div>

          <div className="feature-container">
            <div className="feature-item">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/translate.png"
                alt=""
                className="feature-icon"
              />
              <span>Works in your language</span>
            </div>
            <div className="feature-item">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/clock.png"
                alt=""
                className="feature-icon"
              />
              <span>Save hours every week</span>
            </div>
            <div className="feature-item">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/school.png"
                alt=""
                className="feature-icon"
              />
              <span>School‑ready</span>
            </div>
            <div className="feature-item">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/shield.png"
                alt=""
                className="feature-icon"
              />
              <span>Student‑safe</span>
            </div>
            <div className="feature-item">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/open-book.png"
                alt=""
                className="feature-icon"
              />
              <span>Aligned to global curriculum</span>
            </div>
            <div className="feature-item">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/rocket.png"
                alt=""
                className="feature-icon"
              />
              <span>No training needed</span>
            </div>
            <div className="feature-item">
              <img
                src="https://img.icons8.com/ios-filled/24/00b18f/laptop.png"
                alt=""
                className="feature-icon"
              />
              <span>Works on any device</span>
            </div>
          </div>
        </div>
      </div>

      <div className="workspace-section">
        <h2>Your AI-Powered Teaching Workspaces</h2>
        <div className="grid">
        </div>
        <div className="cta-button">
          <button>Explore Plan Workspace →</button>
        </div>
      </div>

      <img src={curve2} alt="curve2" style={{ display: "block" }} />

      <section className="feature-section">
        <h2>
          Why Teachers <span>♥</span> YoLearn.ai
        </h2>
        <p className="subheading">
          Explore the AI-powered tools that simplify your day, spark engagement,
          and save hours of effort.
        </p>
        <div className="feature-container">
        </div>
        <div className="feature-grid">
        </div>
        <div className="cta-button">
          <button>Get started for free →</button>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;

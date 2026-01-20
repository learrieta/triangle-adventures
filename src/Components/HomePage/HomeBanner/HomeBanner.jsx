
import './homebanner.css'

import homeVideo from '../../../assets/Home/tal.mp4'

import React, { useState, useEffect } from "react";


const SPRING_POPUP_KEY = "springPopupDismissed";

const HomeBanner = () => {
  const [showSpringPopup, setShowSpringPopup] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyDismissed = sessionStorage.getItem(SPRING_POPUP_KEY);

    if (!alreadyDismissed) {
      const timer = setTimeout(() => setShowSpringPopup(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SPRING_POPUP_KEY, "true");
    }
    setShowSpringPopup(false);
  };

  return (
    <div>
      {showSpringPopup && (
        <div className="spring-popup-overlay" onClick={handleClose}>
          <div className="spring-popup" onClick={(e) => e.stopPropagation()}>
            {/* Floating petals layer */}
            <div className="spring-popup-petals" aria-hidden="true">
              {Array.from({ length: 22 }).map((_, i) => (
                <span key={i} className="petal" />
              ))}
            </div>

            <button
              className="spring-popup-close"
              type="button"
              onClick={handleClose}
              aria-label="Close spring announcement"
            >
              ×
            </button>

            <div className="spring-popup-content">
              <div className="spring-popup-hero">
                <div className="spring-popup-mascot" aria-hidden="true">
                  🐝🌷
                </div>
                <div className="spring-popup-subtitle">Spring update</div>
              </div>

              <h2 className="spring-popup-title">
                New for 2026: <span className="spring-highlight">AI Digital Video</span>
              </h2>

              <p className="spring-popup-text">
                We are excited to announce <strong>AI digital video</strong> on our tours! Hear
                stories told from the perspective of the actual historical figure, creating a{" "}
                <strong>wildly immersive</strong> experience.
              </p>

              <p className="spring-popup-text spring-popup-highlight">
                🌿 <strong>Our 2026 schedule is now up!</strong> Book early, spots fill up fast!
              </p>

              <p className="spring-popup-text spring-popup-note">
                (Wilmington, NC schedule coming soon!)
              </p>

              <div className="spring-popup-actions">
                <a className="spring-popup-cta" href="/">
                  View 2026 Schedule →
                </a>
                <button
                  className="spring-popup-secondary"
                  onClick={handleClose}
                  type="button"
                >
                  Maybe later
                </button>
              </div>

              <div className="spring-popup-footer">
                <span className="spring-popup-tag">🌼 Fresh season</span>
                <span className="spring-popup-tag">🎥 Immersive video</span>
                <span className="spring-popup-tag">🗓️ 2026 bookings</span>
              </div>
            </div>
          </div>
        </div>
      )}

    


      {/* Existing banner */}
      <div className="banner--container">
        <div className="home--video--container">
          <video autoPlay loop muted src={homeVideo}></video>
        </div>
        <h1 className="banner--title text-white">
          The Triangle&apos;s
          <br /> only E-Bike <br />
          Touring Company.
        </h1>
        <a
          type="button"
          className="large--button banner--position"
          href="https://fareharbor.com/embeds/book/triangleadventures/items/calendar/?full-items=yes&flow=1269994&from-ssl=yes&ga4t=AW-16453875434%2Cundefined__undefined%3B&g4=yes&cp=no&csp=no&back=https%3A%2F%2Fwww.triangle-adventures.com%2F&u=9b6d5aac-5806-4561-af48-c70f8e3bcf8c&language=en-us"
          target="_blank"
          rel="noreferrer"
        >
          Book a Tour!
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;

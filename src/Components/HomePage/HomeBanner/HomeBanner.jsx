
import './homebanner.css'

import homeVideo from '../../../assets/Home/tal.mp4'

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bookingLinks } from "../../../data/bookingLinks";
import { trackBookNowClick, trackEvent } from "../../../utils/analytics";


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
                <Link
                  className="spring-popup-cta"
                  to="/tours"
                  onClick={() =>
                    trackEvent("schedule_click", {
                      button_location: "spring_popup",
                      destination: "tours_page",
                    })
                  }
                >
                  View 2026 Schedule →
                </Link>
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
          <video autoPlay loop muted playsInline preload="metadata" src={homeVideo}></video>
        </div>
        <h1 className="banner--title text-white">
          The Triangle&apos;s
          <br /> only E-Bike <br />
          Touring Company.
        </h1>
        <a
          type="button"
          className="large--button banner--position"
          href={bookingLinks.calendar}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackBookNowClick({
              tourName: "All Tours Calendar",
              tourSlug: "all-tours",
              buttonLocation: "homepage_hero",
            })
          }
        >
          Book a Tour!
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;

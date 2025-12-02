
import './homebanner.css'

import homeVideo from '../../../assets/Home/tal.mp4'

import React, { useState, useEffect } from "react";


const WINTER_POPUP_KEY = "winterPopupDismissed";

const HomeBanner = () => {
  const [showWinterPopup, setShowWinterPopup] = useState(false);

  useEffect(() => {
    // If we're on the server (Next.js etc.), skip
    if (typeof window === "undefined") return;

    const alreadyDismissed = sessionStorage.getItem(WINTER_POPUP_KEY);

    // Only show if not dismissed this session
    if (!alreadyDismissed) {
      const timer = setTimeout(() => {
        setShowWinterPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(WINTER_POPUP_KEY, "true");
    }
    setShowWinterPopup(false);
  };

  return (
    <div>
      {/* Winter popup */}
      {showWinterPopup && (
        <div className="winter-popup-overlay" onClick={handleClose}>
          <div
            className="winter-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="winter-popup-close"
              type="button"
              onClick={handleClose}
              aria-label="Close winter notice"
            >
              ×
            </button>

            <div className="winter-popup-content">
              <div className="winter-popup-icon">❄</div>
              <h2 className="winter-popup-title">Winter Update</h2>
              <p className="winter-popup-text">
                We will be back in <strong>March 2026!</strong>
              </p>
              <p className="winter-popup-text">
                Full schedule coming in <strong>January</strong>.
              </p>
              <p className="winter-popup-text">
                <strong>Gift cards</strong> available now!
              </p>
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

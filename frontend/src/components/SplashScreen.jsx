// src/components/SplashScreen.jsx
import React from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onNext }) => {
  return (
    <div className="splash-card">
      <h1>Hey You... ✨</h1>
      <p>I made something special just for you. Take a look inside?</p>
      <button className="enter-btn" onClick={onNext}>
        Tap to Enter 🚪
      </button>
    </div>
  );
};

export default SplashScreen;
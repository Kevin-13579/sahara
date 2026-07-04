// src/components/DecisionPage.jsx
import React, { useState } from 'react';
import './DecisionPage.css';

const DecisionPage = ({ onNext }) => {
  const [noBtnStyle, setNoBtnStyle] = useState({});

  const moveButton = () => {
    // Generate random positions between 10% and 80% of view height/width
    const randomX = Math.floor(Math.random() * 70) + 10;
    const randomY = Math.floor(Math.random() * 70) + 10;
    
    setNoBtnStyle({
      position: 'fixed',
      left: `${randomX}vw`,
      top: `${randomY}vh`,
      zIndex: 999
    });
  };

  return (
    <div className="decision-card">
      <h2>Will you speak to me? 🥺</h2>
      <p>Think carefully... (or not, choice is yours!)</p>
      
      <div className="btn-group">
        <button className="yes-btn" onClick={onNext}>
          Yes, fine! ❤️
        </button>
        <button 
          className="no-btn" 
          style={noBtnStyle}
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
        >
          No 😢
        </button>
      </div>
    </div>
  );
};

export default DecisionPage;
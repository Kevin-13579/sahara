// src/components/DoorPage.jsx
import React, { useState } from 'react';
import './DoorPage.css';

const DoorPage = ({ onNext }) => {
  const [openedDoors, setOpenedDoors] = useState({});
  const messages = {
    1: "Will you speak to me or not? 🤔",
    2: "Calm down... take a deep breath. 🌸",
    3: "You have no option, you have to speak to me! 😤"
  };

  const handleDoorClick = (doorId) => {
    setOpenedDoors((prev) => ({ ...prev, [doorId]: true }));
  };

  const allOpened = Object.keys(openedDoors).length === 3;

  return (
    <div className="door-page-container">
      <h2 className="title">Pick a door... any door.</h2>
      
      <div className="doors-grid">
        {[1, 2, 3].map((doorNum) => (
          <div key={doorNum} className="door-wrapper">
            <div 
              className={`door ${openedDoors[doorNum] ? 'open' : ''}`}
              onClick={() => handleDoorClick(doorNum)}
            >
              <div className="door-front">Door {doorNum}</div>
              <div className="door-back">
                <p>{messages[doorNum]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {allOpened && (
        <button className="proceed-btn" onClick={onNext}>
          Now, let's settle this properly ➡️
        </button>
      )}
    </div>
  );
};

export default DoorPage;
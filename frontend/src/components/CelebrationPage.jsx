// src/components/CelebrationPage.jsx
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './CelebrationPage.css';

const CelebrationPage = () => {
  useEffect(() => {
    // Firecracker/Confetti effect explosion
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Confetti shoots from left and right boundaries
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="celebration-card">
      <div className="emoji-pop">🎉🥳✨</div>
      <h1>Yaaaaay! ❤️</h1>
      <h2>Friends Forever 🫂</h2>
      <p>No matter what, whether we speak or not, you're stuck with me!</p>
    </div>
  );
};

export default CelebrationPage;
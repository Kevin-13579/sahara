// src/App.jsx
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import DoorPage from './components/DoorPage';
import DecisionPage from './components/DecisionPage';
import CelebrationPage from './components/CelebrationPage';
import './App.css';

function App() {
  const [phase, setPhase] = useState('splash'); // phases: splash, doors, decision, celebration

  return (
    <div className="app-container">
      {phase === 'splash' && <SplashScreen onNext={() => setPhase('doors')} />}
      {phase === 'doors' && <DoorPage onNext={() => setPhase('decision')} />}
      {phase === 'decision' && <DecisionPage onNext={() => setPhase('celebration')} />}
      {phase === 'celebration' && <CelebrationPage />}
    </div>
  );
}

export default App;
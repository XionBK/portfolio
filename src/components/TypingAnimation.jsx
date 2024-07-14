import React, { useEffect, useState } from 'react';
import './TypingAnimation.css';

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = 'Hello World ! Bienvenue sur mon Portfolio :)';
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(displayText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, displayText, text]);

  return (
    <div className="typing-container">
      {displayText}
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingAnimation;
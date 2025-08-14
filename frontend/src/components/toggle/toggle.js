import React, { useState } from "react";
import "./toggle.css";

const ToggleSwitch = ({ onToggle }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleToggle = () => {
    setIsUnlocked((prev) => {
      const newState = !prev;
      onToggle && onToggle(newState);
      return newState;
    });
  };

  return (
    <div className="toggle-container" onClick={handleToggle}>
      <div className={`toggle-option ${!isUnlocked ? "active" : ""}`}>All</div>
      <div className={`toggle-option ${isUnlocked ? "active" : ""}`}>
        Unlocked
      </div>
      <div
        className="toggle-highlighter"
        style={{ transform: isUnlocked ? "translateX(100%)" : "translateX(0)" }}
      />
    </div>
  );
};

export default ToggleSwitch;

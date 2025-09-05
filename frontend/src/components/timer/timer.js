import { useState, useEffect } from "react";
import "./timer.css";

const CountdownTimer = ({ initialSeconds = 30 }) => {
  const [seconds, setSeconds] = useState(initialSeconds * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Countdown logic
  useEffect(() => {
    if (!isRunning || seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => setSeconds(initialSeconds);

  const toggleVisibility = () => setIsVisible((prev) => !prev);
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  return (
    <div className="timerWrap">
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Timer" : "Show Timer"}
      </button>

      {isVisible && (
        <div className="timer-container">
          <h6>{formatTime(seconds)}</h6>
          <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;

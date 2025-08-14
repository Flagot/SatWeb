import React, { useState } from "react";
import "../App.css";

const Flashcard = () => {
  const mockFlashcards = [
    { id: 1, question: "What is the derivative of x²?", answer: "2x" },
    { id: 2, question: "What is the capital of France?", answer: "Paris" },
    {
      id: 3,
      question: "Who wrote 'To Kill a Mockingbird'?",
      answer: "Harper Lee",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % mockFlashcards.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) =>
      prev === 0 ? mockFlashcards.length - 1 : prev - 1
    );
  };

  return (
    <div className="flashcard-container">
      <div
        className={`flashcard ${showAnswer ? "flipped" : ""}`}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="front">
          <p>{mockFlashcards[currentIndex].question}</p>
        </div>
        <div className="back">
          <p>{mockFlashcards[currentIndex].answer}</p>
        </div>
      </div>

      <div className="flashcard-controls">
        <button onClick={handlePrev}>Previous</button>
        <span>
          {currentIndex + 1} / {mockFlashcards.length}
        </span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Flashcard;

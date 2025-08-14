import PrepSection from "../Prep/PrepSection.js";
import "./mainConetent.css";
import ToggleSwitch from "../toggle/toggle.js";
import React, { useState } from "react";

function MainContent() {
  const [showUnlocked, setShowUnlocked] = useState(false);

  const exams = [
    { title: "Test 1", examId: "sat", unlocked: true },
    { title: "Test 2", examId: "ielts", unlocked: true },
    { title: "Test 3", examId: "toefl", unlocked: true },
    { title: "Test 5", examId: "gmat", unlocked: true },
    { title: "Test 6", examId: "gre", unlocked: false },
    { title: "Test 7", examId: "act", unlocked: false },
    { title: "Test 8", examId: "coding", unlocked: false },
    { title: "Test 9", examId: "math", unlocked: false },
    { title: "Test 10", examId: "physics", unlocked: false },
    { title: "Test 11", examId: "chemistry", unlocked: false },
  ];

  const handleToggle = (isUnlocked) => {
    console.log("Viewing:", isUnlocked ? "Unlocked" : "All");
    setShowUnlocked(isUnlocked);
  };
  const filteredExams = showUnlocked
    ? exams.filter((exam) => exam.unlocked)
    : exams;
  return (
    <div>
      <h1>Full length Test</h1>
      <ToggleSwitch onToggle={handleToggle} />
      <section className="prep-container">
        {filteredExams.map((exam, index) => (
          <PrepSection key={index} title={exam.title} examId={exam.examId} />
        ))}
      </section>
    </div>
  );
}

export default MainContent;

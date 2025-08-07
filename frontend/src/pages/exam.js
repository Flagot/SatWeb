import { useParams } from "react-router-dom";
import { useState } from "react";
import "./ExamPage.css";
const examContent = {
  sat: {
    title: "SAT Exam",
    questions: [
      {
        text: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
      },
      {
        text: "Solve: 2x + 5 = 15",
        choices: ["x = 5", "x = 10", "x = 3", "x = 2"],
      },
      {
        text: "What is the synonym of 'Rapid'?",
        choices: ["Slow", "Fast", "Heavy", "Bright"],
      },
    ],
  },
  // Add more exams as needed
};

function ExamPage() {
  const { examId } = useParams();
  const exam = examContent[examId];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [selectedChoices, setSelectedChoices] = useState({});

  if (!exam) return <h2>Exam not found</h2>;

  const currentQuestion = exam.questions[currentIndex];

  const handleChoiceSelect = (choice) => {
    setSelectedChoices({
      ...selectedChoices,
      [currentIndex]: choice,
    });
  };

  const handleMark = () => {
    if (!markedQuestions.includes(currentIndex)) {
      setMarkedQuestions([...markedQuestions, currentIndex]);
    } else {
      setMarkedQuestions(markedQuestions.filter((q) => q !== currentIndex));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < exam.questions.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="exam-container">
      <div className="question-column">
        <h2>{exam.title}</h2>
        <div className="progress">
          Question {currentIndex + 1} / {exam.questions.length}
        </div>
        <p className="question-text">{currentQuestion.text}</p>
        <button onClick={handleMark} className="mark-btn">
          {markedQuestions.includes(currentIndex)
            ? "Unmark"
            : "Mark for Review"}
        </button>
      </div>

      <div className="choices-column">
        {currentQuestion.choices.map((choice, i) => (
          <div
            key={i}
            className={`choice ${
              selectedChoices[currentIndex] === choice ? "selected" : ""
            }`}
            onClick={() => handleChoiceSelect(choice)}
          >
            {choice}
          </div>
        ))}

        <div className="nav-buttons">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            Prev
          </button>

          {currentIndex === exam.questions.length - 1 ? (
            <button onClick={() => alert("Exam Finished!")}>Finish</button>
          ) : (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExamPage;
// const examContent = {
//   sat: {
//     title: "SAT Exam",
//     questions: [
//       "What is the capital of France?",
//       "Solve: 2x + 5 = 15",
//       "What is the synonym of 'Rapid'?",
//     ],
//   },
//   ielts: {
//     title: "IELTS Exam",
//     questions: [
//       "Describe your favorite season.",
//       "What are the benefits of reading?",
//       "Write about a memorable trip.",
//     ],
//   },
//   // Add other exams...
// };

// function ExamPage() {
//   const { examId } = useParams();
//   const exam = examContent[examId];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   if (!exam) {
//     return <h2>Exam not found.</h2>;
//   }

//   const currentQuestion = exam.questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === exam.questions.length - 1;

//   const handleNext = () => {
//     if (!isLastQuestion) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     }
//   };

//   return (
//     <div style={{ padding: "40px", textAlign: "center" }}>
//       <h1>{exam.title}</h1>

//       {!isLastQuestion || currentQuestionIndex === exam.questions.length - 1 ? (
//         <>
//           <h3>Question {currentQuestionIndex + 1}</h3>
//           <p>{currentQuestion}</p>

//           {!isLastQuestion ? (
//             <button onClick={handleNext}>Next</button>
//           ) : (
//             // <button onClick={() => alert("Exam Finished!")}>Finish</button>
//             <button onClick={<h1>Exam Finished</h1>}>Finish</button>
//           )}
//         </>
//       ) : (
//         <p>You've finished the exam!</p>
//       )}
//     </div>
//   );
// }

// export default ExamPage;

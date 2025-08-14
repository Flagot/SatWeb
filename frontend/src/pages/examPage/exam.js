// import { useEffect, useState } from "react";
// import "./ExamPage.css";

// const Home = () => {
//   const [exams, setExams] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchExams = async () => {
//       const response = await fetch("http://localhost:4000/api/sat");
//       const json = await response.json();

//       if (response.ok) {
//         setExams(json);
//       }
//     };

//     fetchExams();
//   }, []);

//   return (
//     <div className="exam-container">
//       <div className="progress">
//         Question {currentIndex + 1} / {exams && exams[0].questions.length}
//       </div>
//       <div className="question-column">
//         {exams &&
//           exams.map((exam) => (
//             <p className="question-text">{exam.questions.map((q) => q.text)}</p>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import { useState, useEffect } from "react";
import "./ExamPage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const ExamPage = () => {
  const [exams, setExams] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [selectedChoices, setSelectedChoices] = useState({});
  const { show } = useContext(SidebarContext);

  useEffect(() => {
    const fetchexam = async () => {
      const response = await fetch(`http://localhost:4000/api/sat`);
      const data = await response.json();
      if (!response.ok) {
        // handle error, maybe throw or set error state
        console.error("Fetch failed:", data);
      } else {
        setExams(data);
      }
    };
    fetchexam();
  }, []);

  // if (loading) return <h2>Loading exam...</h2>;
  // if (error) return <h2>{error}</h2>;
  // if (!exam) return <h2>Exam not found</h2>;
  if (!exams || !exams[0].questions || exams[0].questions.length === 0)
    return <p>No exam data found</p>;

  const currentQuestion = exams[0]?.questions?.[currentIndex];

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
    if (currentIndex < exams[0].questions.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="main-exam-container">
      <div className="top-nav-exam">
        <h4>Section 1, Module 1: Reading and Writing</h4>
        <Link to="/">
          <i onClick={show} className="bxr bx-home-alt icon exam-icon"></i>
        </Link>
      </div>

      <div className="exam-container">
        <div className="question-column">
          {/* <h2>{exam.title}</h2> */}
          <div className="progress">
            Question {currentIndex + 1} / {exams && exams[0].questions.length}
          </div>
          <p className="question-text">{currentQuestion.text}</p>
          <button onClick={handleMark} className="mark-btn">
            {markedQuestions.includes(currentIndex)
              ? "Unmark"
              : "Mark for Review"}
          </button>
        </div>

        <div className="choices-column">
          {currentQuestion?.choices?.map((choice, i) => (
            <div
              key={i}
              className={`choice ${
                selectedChoices[currentIndex] === choice ? "selected" : ""
              }`}
              onClick={() => handleChoiceSelect(choice)}
            >
              {choice.text}
            </div>
          ))}

          <div className="nav-buttons">
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              Prev
            </button>

            {currentIndex === exams && exams.questions.length - 1 ? (
              <button onClick={() => alert("Exam Finished!")}>Finish</button>
            ) : (
              <button onClick={handleNext}>Next</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;

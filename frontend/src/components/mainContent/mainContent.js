import PrepSection from "../Prep/PrepSection.js";
import "./mainConetent.css";
const exams = [
  { title: "SAT Prep", examId: "sat" },
  { title: "IELTS Prep", examId: "ielts" },
  { title: "TOEFL Prep", examId: "toefl" },
  { title: "GMAT Prep", examId: "gmat" },
  { title: "GRE Prep", examId: "gre" },
  { title: "ACT Prep", examId: "act" },
  { title: "Coding Interview Prep", examId: "coding" },
  { title: "Math Olympiad Prep", examId: "math" },
  { title: "Physics Prep", examId: "physics" },
  { title: "Chemistry Prep", examId: "chemistry" },
];

function MainContent() {
  return (
    <section className="prep-container">
      {exams.map((exam, index) => (
        <PrepSection key={index} title={exam.title} examId={exam.examId} />
      ))}
    </section>
  );
}

export default MainContent;

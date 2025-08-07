import HeroSection from "./Herosection.js";
import PrepSection from "./PrepSection.js";
import TipsSection from "./TipsSection.js";

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
    <div className="App">
      <div className="app-container">
        {/* <section id="home">
          <HeroSection />
        </section> */}
        <section id="prep">
          {exams.map((exam, index) => (
            <PrepSection key={index} title={exam.title} examId={exam.examId} />
          ))}
          {/* <PrepSection title="Test 1" />
          <PrepSection title="Test 2" />
          <PrepSection title="Test 3" />
          <PrepSection title="Test 4" />
          <PrepSection title="Test 5" />
          <PrepSection title="Test 6" />
          <PrepSection title="Test 7" /> */}
        </section>
        {/* <section id="tips">
          <TipsSection />
        </section> */}
      </div>
    </div>
  );
}

export default MainContent;

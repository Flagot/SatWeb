import ScoreReportCard from "../components/scoreCard/scoreCard";

const Result = () => {
  const sections = [
    { name: "Math", score: 700, max: 800 },
    { name: "Reading", score: 350, max: 400 },
    { name: "Writing", score: 300, max: 400 },
  ];

  return (
    <section className="prep-container">
      <ScoreReportCard totalScore={1350} sections={sections} />
      <ScoreReportCard totalScore={1350} sections={sections} />
      <ScoreReportCard totalScore={1350} sections={sections} />
      <ScoreReportCard totalScore={1350} sections={sections} />
    </section>
  );
};

export default Result;

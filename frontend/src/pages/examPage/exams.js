import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExams } from "../../state/exam/examSlice";
import { fetchSections } from "../../state/section/sectionSlice";
import "./ExamPage.css";

function ExamList() {
  const dispatch = useDispatch();
  const { exams, loading, error } = useSelector((state) => state.exams);
  const { sections } = useSelector((state) => state.sections);

  useEffect(() => {
    dispatch(fetchExams());
    dispatch(fetchSections());
  }, [dispatch]);

  if (loading) return <p>Loading exams...</p>;
  if (error) return <p>Error: {error}</p>;
  if (exams.length === 0) return <p>No exams found.</p>;

  return (
    <div className="main-exam-container">
      <div>
        {sections.map((section) => (
          <h1 key={section.section_id}>{section.title}</h1>
        ))}
      </div>
      <div className="exam-container">
        {exams.map((exam) => (
          <div key={exam.exam_id}>{exam.title}</div>
        ))}
      </div>
    </div>
  );
}

export default ExamList;

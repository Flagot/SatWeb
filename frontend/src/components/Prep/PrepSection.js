import { Link } from "react-router-dom";
import "./prepsection.css";

function PrepSection({ title, examId }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>Practice tests, time management, strategy guides, and more.</p>
      <Link to={`/exam/${examId}`}>
        <button>start exam</button>
      </Link>
    </div>
  );
}
export default PrepSection;

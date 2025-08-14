import { Link } from "react-router-dom";
import "./prepsection.css";
import { SidebarContext } from "../../context/sidebarContext";
import { useContext } from "react";

function PrepSection({ title, examId }) {
  const { hide } = useContext(SidebarContext);

  return (
    <div className="section">
      <h2>{title}</h2>
      <p>Practice tests, time management, strategy guides, and more.</p>
      <Link to={`/exam/${examId}`}>
        <button onClick={hide} className="start-exam-btn">
          start exam
        </button>
      </Link>
    </div>
  );
}

export default PrepSection;

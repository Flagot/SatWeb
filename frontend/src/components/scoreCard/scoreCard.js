import React from "react";
import "./scorecard.css";

const ScoreReportCard = ({ totalScore, sections }) => {
  return (
    <div className="score-report-card">
      <h2 className="score-title">Score Report</h2>

      <div className="total-score">
        {totalScore}
        <span className="max-score">/1600</span>
      </div>

      <div className="section-scores">
        {sections.map((section, idx) => (
          <div className="section-row" key={idx}>
            <span className="section-name">{section.name}</span>
            <span className="section-score">{section.score}</span>
            <div className="score-bar">
              <div
                className="score-bar-fill"
                style={{ width: `${(section.score / section.max) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreReportCard;

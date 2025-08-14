import "../App.css";

const Flashcard = () => {
  const flashcards = [
    {
      id: 1,
      title: "Math",
      description: "Practice algebra, geometry, and calculus.",
    },
    {
      id: 2,
      title: "Reading",
      description: "Improve comprehension and vocabulary.",
    },
    {
      id: 3,
      title: "Writing",
      description: "Master grammar and essay writing skills.",
    },
  ];

  return (
    <div className="flashcard-row">
      {flashcards.map((card) => (
        <div className="flashcard-item" key={card.id}>
          <div className="flashcard-icon">{card.icon}</div>
          <h1 className="flashcard-title">{card.title}</h1>
          <p className="flashcard-description">{card.description}</p>
          <button className="start-exam-btn">start exam</button>
        </div>
      ))}
    </div>
  );
};

export default Flashcard;

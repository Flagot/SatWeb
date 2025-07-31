import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/result">
          <h1>Score Result</h1>
        </Link>
        <Link to="/preps">
          <h1>Preps</h1>
        </Link>
        <Link to="/tips">
          <h1>Tips</h1>
        </Link>
      </div>
    </header>
  );
};

export default Sidebar;

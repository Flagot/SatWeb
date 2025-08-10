import { Link } from "react-router-dom";
import "./sidebar.css";
import { useState, useEffect } from "react";

const Sidebar = ({ isShrunk, onToggle }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className={isShrunk ? "sidebar small " : "sidebar"}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src="/image/satlogo.png" alt="" />
          </span>
          <div className="text text-header">
            <span className="name">Best SAT PREP</span>
          </div>
        </div>
        <i className="bxr bx-chevron-right right toggle"></i>
        <i className="bxr bx-chevron-left left toggle" onClick={onToggle}></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/">
                <i className="bxr bx-home-alt icon"></i>
                <span className="text nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/result">
                <i className="bxr bx-bar-chart-big icon"></i>
                <span className="text nav-text">Score Report</span>
              </Link>{" "}
            </li>
            <li className="nav-link">
              <Link to="/preps">
                <i className="bxr bx-bell icon"></i>
                <span className="text nav-text">Tips</span>
              </Link>{" "}
            </li>
            <li className="nav-link">
              <Link to="/tips">
                <i className="bxr bx-pie-chart-alt icon"></i>
                <span className="text nav-text">order History</span>
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="">
            <Link to="/tips">
              <i className="bxr bx-arrow-out-up-left-circle icon"></i>
              <span className="text nav-text">LogOut</span>
            </Link>
          </li>
          <li className="mode">
            <div className="moon-sun">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <spane className="mode-text text">
              {isDark ? "Light Mode" : "Dark Mode"}
            </spane>
            <div className="toggle-switch" onClick={() => setIsDark(!isDark)}>
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;

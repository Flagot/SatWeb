import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./pages/results";
import Tips from "./pages/tips";
import Preps from "./pages/Preps";
import Exam from "./pages/exam";
import { useState } from "react";

function App() {
  const [isShrunk, setIsShrunk] = useState(false);

  const toggleSidebar = () => {
    setIsShrunk(!isShrunk);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar isShrunk={isShrunk} onToggle={toggleSidebar} />
        <section className={isShrunk ? "home expand" : "home"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Results />} />
            <Route path="/preps" element={<Preps />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/exam/:examId" element={<Exam />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;

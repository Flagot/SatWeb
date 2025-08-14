import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./pages/results";
import Flashcard from "./pages/tips";
import OrderHistory from "./pages/order";
import Exam from "./pages/examPage/exam";
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
            <Route path="/result" element={<Result />} />
            <Route path="/order" element={<OrderHistory />} />
            <Route path="/tips" element={<Flashcard />} />
            <Route path="/exam/:examId" element={<Exam />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;

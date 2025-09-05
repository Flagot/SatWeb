import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Result from "./pages/results";
import Flashcard from "./pages/tips";
import OrderHistory from "./pages/order";
import Exam from "./pages/examPage/exam";
import ExamList from "./pages/examPage/exams";

import { useState } from "react";

const AppLayout = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const location = useLocation();
  const isExamRoute = location.pathname.startsWith("/exam");

  const toggleSidebar = () => {
    setIsShrunk(!isShrunk);
  };

  return (
    <div className="App">
      <Sidebar isShrunk={isShrunk} onToggle={toggleSidebar} />
      <section
        className={!isExamRoute ? (isShrunk ? "home expand" : "home") : ""}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/order" element={<OrderHistory />} />
          <Route path="/tips" element={<Flashcard />} />
          <Route path="/exam" element={<ExamList />} />
        </Routes>
      </section>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

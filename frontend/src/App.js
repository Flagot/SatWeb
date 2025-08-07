import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./pages/results";
import Tips from "./pages/tips";
import Preps from "./pages/Preps";
import Exam from "./pages/exam";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <BrowserRouter>
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/result" element={<Results />} />
              <Route path="/preps" element={<Preps />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/exam/:examId" element={<Exam />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

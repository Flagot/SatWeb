import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./pages/results";
import Tips from "./pages/tips";
import Preps from "./pages/Preps";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <BrowserRouter>
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/result" element={<Results />} />
            </Routes>
            <Routes>
              <Route path="/preps" element={<Preps />} />
            </Routes>
            <Routes>
              <Route path="/tips" element={<Tips />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

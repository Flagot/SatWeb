import HeroSection from "./Herosection.js";
import PrepSection from "./PrepSection.js";
import TipsSection from "./TipsSection.js";

function MainContent() {
  return (
    <div className="App">
      <div className="app-container">
        <section id="home">
          <HeroSection />
        </section>
        <section id="prep">
          <PrepSection />
        </section>
        <section id="tips">
          <TipsSection />
        </section>
      </div>
    </div>
  );
}

export default MainContent;

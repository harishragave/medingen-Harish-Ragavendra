import "./App.css";

import Navbar from "./components/navbar";
import MedicineCards from "./pages/MedicationCard";
import MainPage from "./pages/MainPage";
import FaqSection from "./pages/FaqSection";
import FeatureBadges from "./pages/FeatureBadges";
import Footer from "./components/footer";

import MedicineComparison from "./MedicineComparison";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: "120px" }}>
        <MainPage />
        <MedicineCards />
        <FaqSection />
        <FeatureBadges />
        <Footer />
        
      </div>
      <div>
      <MedicineComparison />
      </div>
    </div>
  );
}

export default App;

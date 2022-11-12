import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBarPrimary/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBarSecondary from "./Components/NavBarSecondary/NavBarSecondary";
import MainSection from "./Components/MainSection/MainSection";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <HeroSection />
      <MainSection />
      
      {/* <Routes> */}
      {/* <Route path="/" element={<NavBar />} /> */}
      {/* <Route path="/navbar" element={<NavBar />} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;

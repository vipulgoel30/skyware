import React, { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBarPrimary/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBarSecondary from "./Components/NavBarSecondary/NavBarSecondary";
import MainSection from "./Components/MainSection/MainSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBarSmallScreen from "./Components/NavBarSmallScreen/NavBarSmallScreen";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Blog from "./Components/Blog/Blog";
import Career from "./Components/Career/Career";

AOS.init({
  once: true,
});
function App() {
  // for the small screen nav Bar
  const [navState, setNavState] = useState(false);
  function navStateSmallHandler() {
    setNavState((prevState) => !prevState);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={`${navState ? "hidden" : ""} navbar:block`}>
                <HeroSection />
                <MainSection />
              </div>
              {/* <NavBarSmallScreen
                navStateSmallChanger={navStateSmallHandler}
                state={navState}
              /> */}
            </>
          }
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/careers" element={<Career />} />
        {/* <Route path="/navbar" element={<NavBar />} /> */}
      </Routes>
      <ToastContainer
        position="bottom-right"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        autoClose={2000}
      />
    </>
  );
}

export default App;

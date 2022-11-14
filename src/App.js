import React, { useEffect, useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBarPrimary/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBarSecondary from "./Components/NavBarSecondary/NavBarSecondary";
import MainSection from "./Components/MainSection/MainSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBarSmallScreen from "./Components/NavBarSmallScreen/NavBarSmallScreen";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Blog from "./Components/Blog/Blog";
import Career from "./Components/Career/Career";
import Team from "./Components/Team/Team";
import Loader from "./Components/Loader";
// import AboutImage from "./Components/About/AboutImage";

AOS.init({
  once: true,
});
function App() {
  const [loaderState, setLoaderState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0 })
      setLoaderState(false);
    }, 1000);
  }, [])
  // for the small screen nav Bar
  // const [navState, setNavState] = useState(false);
  // function navStateSmallHandler() {
  //   setNavState((prevState) => !prevState);
  // }

  return (
    <>
      <NavBar />
      {loaderState && <Loader />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBarSmallScreen />
              {/* <div className={`${navState ? "hidden" : ""} navbar:block`}> */}
              <HeroSection />
              <MainSection />
              {/* <AboutImage /> */}
              {/* </div> */}
            </>
          }
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/team" element={<Team />} />
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

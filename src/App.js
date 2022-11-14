import React, { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = lazy(() => import("./Components/NavBarPrimary/NavBar"));
const HeroSection = lazy(() => import("./Components/HeroSection/HeroSection"));
const MainSection = lazy(() => import("./Components/MainSection/MainSection"));
const NavBarSmallScreen = lazy(() => import("./Components/NavBarSmallScreen/NavBarSmallScreen"));
const Blog = lazy(() => import("./Components/Blog/Blog"));
const Career = lazy(() => import("./Components/Career/Career"));
const Team = lazy(() => import("./Components/Team/Team"));
const Loader = lazy(() => import("./Components/Loader"));

AOS.init({
  once: true,
});
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <NavBarSmallScreen />
              <HeroSection />
              <MainSection />
            </>
          }
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        autoClose={2000}
      />
    </Suspense>
  );
}

export default App;

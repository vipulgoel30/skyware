import React, { useState } from "react";
import NavBarSecondary from "../NavBarSecondary/NavBarSecondary";
import About from "../../Components/About/About";
import Solution from "../Solution/Solution";
import Testimonials from "../Testimonials/Testimonials";
import Supported from "../Supported/Supported";
import Contact from "../Contact/Contact";
function MainSection() {
  const [currentLink, setCurrentLink] = useState("");
  function changeLinkHandler(data) {
    setCurrentLink(data);
  }
  console.log(currentLink);
  return (
    <>
      <NavBarSecondary currentLink={currentLink} />

      {/* <Solution onChangeLinkSet={changeLinkHandler} /> */}
      <About onChangeLinkSet={changeLinkHandler} />
      {/* <Testimonials onChangeLinkSet={changeLinkHandler} /> */}
      <Supported onChangeLinkSet={changeLinkHandler} />
      <Contact onChangeLinkSet={changeLinkHandler} />
    </>
  );
}
export default MainSection;

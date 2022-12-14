import React, { useState } from "react";
import NavBarSecondary from "../NavBarSecondary/NavBarSecondary";
import About from "../../Components/About/About";
import Product from "../Product/Product";
import Testimonials from "../Testimonials/Testimonials";
import Supported from "../Supported/Supported";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Laurels from "../Laurels/Laurels";
function MainSection() {
  const [currentLink, setCurrentLink] = useState("");
  function changeLinkHandler(data) {
    setCurrentLink(data);
  }
  // console.log(currentLink);
  return (
    <>
      <NavBarSecondary currentLink={currentLink} />

      <About onChangeLinkSet={changeLinkHandler} />
      <Product onChangeLinkSet={changeLinkHandler} />
      <Laurels onChangeLinkSet={changeLinkHandler} />
      <Testimonials onChangeLinkSet={changeLinkHandler} />
      <Supported onChangeLinkSet={changeLinkHandler} />
      {/* <Testimonials onChangeLinkSet={changeLinkHandler} /> */}
      <Contact onChangeLinkSet={changeLinkHandler} />
      <Footer />
    </>
  );
}
export default MainSection;

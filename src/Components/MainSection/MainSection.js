import React, { useState } from "react";
import NavBarSecondary from "../NavBarSecondary/NavBarSecondary";
import About from "../../Components/About/About";
import Solution from "../Solution/Solution";
function MainSection() {
  const [currentLink, setCurrentLink] = useState("");
  function changeLinkHandler(data) {
    setCurrentLink(data);
  }
  //   console.log(currentLink);
  return (
    <>
      <NavBarSecondary currentLink={currentLink} />

      <About onChangeLinkSet={changeLinkHandler} />
      <Solution onChangeLinkSet={changeLinkHandler} />
    </>
  );
}
export default MainSection;

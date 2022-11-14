import React, { useState } from "react";
import NavBarSmallContent from "./NavBarSmallContent";
import NavBarSmallScreenButton from "./NavBarSmallScreenButton";

function NavBarSmallScreen(props) {
  const [navState, setNavState] = useState(false);
  function navStateHandler() {
    setNavState((prevState) => !prevState);
    console.log("chnaged");
  }
  // console.log(navState);

  return (
    <>
      {navState && (
        <NavBarSmallContent navStateSmallChanger={navStateHandler} />
      )}

      <NavBarSmallScreenButton
        navStateSmallChanger={navStateHandler}
        navState={navState}
      ></NavBarSmallScreenButton>
    </>
  );
}
export default NavBarSmallScreen;

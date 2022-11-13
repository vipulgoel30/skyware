import React, { useState } from "react";
import NavBarSmall from "./NavBarSmallContent";
import NavBarSmallScreenButton from "./NavBarSmallScreenButton";

function NavBarSmallScreen(props) {
  //   const [navState, setNavState] = useState(false);
  //   function navStateHandler() {
  //     setNavState((prevState) => !prevState);
  //   }
  return (
    <>
      <NavBarSmall state={props.state} />

      <NavBarSmallScreenButton
        navStateSmallChanger={props.navStateSmallChanger}
        state={props.state}
      ></NavBarSmallScreenButton>
    </>
  );
}
export default NavBarSmallScreen;

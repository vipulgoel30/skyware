import React, { useState, useEffect } from "react";
import skywareLogo from "../../Images/SkywareLogo.png";
import LoginButton from "../Login/LoginButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBarLink from "./NavBarLink";
import "./NavBar.css";
function NavBar() {
 

  return (
    <div
      className={` w-screen z-10 flex items-center justify-between py-3  px-5  lg:px-12  bg-transparent `}
    >
      <img src={skywareLogo} alt="Skyware" className={`w-52 h-14 `} />
      <div className="flex gap-6 lg:gap-8 items-center">
        <div className="navbar-links flex gap-6 lg:gap-8 items-center">
          <NavBarLink name="Home" address="/"></NavBarLink>
          <NavBarLink name="About"></NavBarLink>
          <NavBarLink name="Solution"></NavBarLink>
          <NavBarLink name="Careers"></NavBarLink>
        </div>
        <LoginButton />
      </div>
    </div>
  );
}

export default NavBar;

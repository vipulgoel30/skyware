import React, { useState, useEffect } from "react";
import skywareLogo from "../../Images/SkywareLogo.png";
// import LoginButton from "../Login/LoginButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBarLink from "./NavBarLink";
// import "./NavBar.css";
import LoginHandler from "../Login/LoginHandler";
function NavBar() {


  return (
    <div
      className={` w-screen flex items-center ${window.location.pathname === '/' && 'bg-purple-100'} justify-between py-1  px-5  lg:px-8 gap-5   `}
    >
      <img src={skywareLogo} alt="Skyware" className={`w-40 h-12 `} />
      <div className="flex gap-6 lg:gap-8 items-baseline justify-between">
        <div className="hidden navbar:flex gap-4 items-center">
          {window.location.pathname !== '/' && < NavBarLink name="Home" />}
          <NavBarLink name="Career" />
          <NavBarLink name="Blog" />
          <NavBarLink name="Contact Us" />
        </div>
        <LoginHandler />
      </div>
    </div>
  );
}

export default NavBar;

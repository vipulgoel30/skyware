import React from "react";
import skywareLogo from "../../Images/SkywareLogo.webp";
import { useLocation } from "react-router-dom";
import NavBarLink from "./NavBarLink";
import LoginHandler from "../Login/LoginHandler";

function NavBar() {
  const location = useLocation();

  return (
    <div
      className={` w-screen flex items-center ${
        location.pathname === "/" && "bg-purple-100"
      } justify-between py-1 px-3 sm:px-6 lg:px-8 gap-5`}
    >
      <img
        src={skywareLogo}
        alt="Skyware"
        className={`w-24 h-6 xsm:w-32 xsm:h-8 sm:w-40 sm:h-12`}
      />
      <div className="flex gap-6 lg:gap-8 items-baseline justify-between">
        <div className="hidden navbar:flex gap-4 items-center">
          {window.location.pathname !== "/" && <NavBarLink name="Home" />}
          <NavBarLink name="Career" address="careers" target="true" />
          <NavBarLink name="Blog" address="blogs" target="true" />
          <NavBarLink name="Contact Us" />
        </div>
        <LoginHandler />
      </div>
    </div>
  );
}

export default NavBar;

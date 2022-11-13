import React, { useState } from "react";

import NavBarSecondaryItem from "./NavBarSecondaryItem";
// import "./NavBarSecondary.css";
// ..

function NavBarSecondary(props) {
  //   const [activeLink, setActiveLink] = useState("About");
  //   function changeActiveLink(data) {
  //     setActiveLink(data);
  //   }

  return (
    <div
      id="navbarsecondary"
      className="hidden navbar:flex bg-white  gap-12 justify-center sticky top-0 shadow-md px-auto pt-5 text-sm tracking-widest font-semibold uppercase z-[6]"
      //   data-aos="fade-in"
    >
      <NavBarSecondaryItem
        name="Home"
        destination=""
        currentLink={props.currentLink}
      />
      <NavBarSecondaryItem
        name="About Us"
        destination="About Us"
        currentLink={props.currentLink}
      />
      <NavBarSecondaryItem
        name="Solution"
        destination="Solution"
        currentLink={props.currentLink}
      />
      <NavBarSecondaryItem
        name="Supported By"
        destination="Supported By"
        currentLink={props.currentLink}
      />
      <NavBarSecondaryItem
        name="Testimonial"
        destination=""
        currentLink={props.currentLink}
      />

      {/* <NavBarSecondaryItem
        name="Contact Us"
        destination="Contact Us"
        currentLink={props.currentLink}
      /> */}
    </div>
  );
}
export default NavBarSecondary;

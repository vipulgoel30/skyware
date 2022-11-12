import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import NavBarSecondaryItem from "./NavBarSecondaryItem";
// ..
AOS.init();
function NavBarSecondary(props) {
  //   const [activeLink, setActiveLink] = useState("About");
  //   function changeActiveLink(data) {
  //     setActiveLink(data);
  //   }

  return (
    <div
      id="navbarsecondary"
      className="bg-white flex gap-12 justify-center sticky top-0 shadow-md px-auto pt-5 text-sm tracking-widest font-semibold uppercase z-[6]"
      //   data-aos="fade-in"
    >
      <NavBarSecondaryItem
        name="Home"
        destination=""
        currentLink={props.currentLink}
      />
      <NavBarSecondaryItem
        name="About"
        destination="About"
        currentLink={props.currentLink}
      />
      <NavBarSecondaryItem
        name="Solution"
        destination="Solution"
        currentLink={props.currentLink}
      />
      <NavBarSecondaryItem
        name="Testimonial"
        destination=""
        currentLink={props.currentLink}
      />
      <NavBarSecondaryItem
        name="Supported By"
        destination=""
        currentLink={props.currentLink}
      />
      <NavBarSecondaryItem
        name="Contact Us"
        destination=""
        currentLink={props.currentLink}
      />
    </div>
  );
}
export default NavBarSecondary;

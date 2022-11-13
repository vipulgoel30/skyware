import React from "react";
import { Link } from "react-router-dom";
function NavBarLink(props) {
  return (
    <a
      href={`/#${props.address ? `` : `${props.name}`}`}
      className="hover:text-transparent hover:bg-gradient-to-r roboto  text-black text-lg tracking-widest hover:from-primary hover:to-secondary hover:bg-clip-text hover:scale-105 transition-all duration-300 active:scale-95"
    >
      {props.name}
    </a>
  );
}
export default NavBarLink;

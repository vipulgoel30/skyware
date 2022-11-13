import React from "react";
import { Link } from "react-router-dom";
function NavBarLink(props) {
  return (
    <a
      href={`#${props.address ? `` : `${props.name}`}`}
      className="hover:text-transparent hover:bg-gradient-to-r font-mono font-bold text-black text-xl md:text-2xl tracking-widest hover:from-primary hover:to-secondary hover:bg-clip-text hover:scale-105 transition-all duration-300 active:scale-95"
    >
      {props.name}
    </a>
  );
}
export default NavBarLink;

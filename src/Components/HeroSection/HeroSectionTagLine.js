import React, { useEffect } from "react";
import Typed from "typed.js";
function HeroSectionTagLine() {
  let tag = React.createRef(null);
  let typed = React.createRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "<b>Skyware Automation</b>",
        "<b>Redefining</b> storage with precision.",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      shuffle: true,
      loopCount: 2,
    };
    typed.current = new Typed(tag.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <span
      className="text-black text-xl tracking-wide sm:text-2xl md:text-3xl md:tracking-wider "
      ref={tag}
    ></span>
  );
}
export default HeroSectionTagLine;

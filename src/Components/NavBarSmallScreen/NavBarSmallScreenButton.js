import { RiMenu5Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
function NavBarSmallScreenButton(props) {
  window.addEventListener("scroll", () => {
    const navbarSmallButton = document.querySelector(".navbar-small-button");
    if (window.scrollY > window.innerHeight * 0.5 && !props.state) {
      navbarSmallButton.style.opacity = 0.5;
    } else {
      // navbarSmallButton.style.opacity = 1;
    }
  });
  return (
    <button
      className="block navbar:hidden navbar-small-button text-2xl fixed bottom-10 p-2  z-[9] left-1/2 opacity-100  -translate-x-1/2 bg-gradient-to-b from-primary to-secondary text-white rounded-full hover:scale-105 transition-all duration-300 active:scale-95 shadow-xl"
      onClick={props.navStateSmallChanger}
    >
      {props.navState ? <MdClose /> : <RiMenu5Fill />}
    </button>
  );
}
export default NavBarSmallScreenButton;

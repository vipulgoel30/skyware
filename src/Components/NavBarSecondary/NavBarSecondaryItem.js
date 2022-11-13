import { Link } from "react-router-dom";
const NavBarSecondaryItem = (props) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <a
        href={`#${props.destination} `}
        className={`${
          props.currentLink === props.name ? "text-blue-300 " : ""
        } transition-all duration-500`}
      >
        {props.name}
      </a>
      <div
        className={`w-full h-1 ${
          props.currentLink === props.name ? "bg-blue-400" : "bg-transparent"
        }`}
      ></div>
    </div>
  );
};
export default NavBarSecondaryItem;

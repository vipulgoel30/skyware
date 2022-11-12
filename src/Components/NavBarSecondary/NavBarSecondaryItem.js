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
        className={`w-6 h-2 bg-blue-200 rounded-tl-[100rem] rounded-tr-[100rem]`}
      ></div>
    </div>
  );
};
export default NavBarSecondaryItem;

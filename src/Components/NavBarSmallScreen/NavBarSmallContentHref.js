function NavBarSmallContentHref(props) {
  return (
    <a
      href={`#${props.content === "Home" ? "" : props.content}`}
      // className="w-full"
      onClick={props.navStateSmallChanger}
    >
      <div className="flex items-center justify-evenly">
        {/* <div className="text-xl overflow-hidden w-12 h-12 rounded-full">
          <AiOutlineHome />
        </div> */}
        <h1 className="text-lg open-sans tracking-wider border-b-2 border-primary pr-6">
          {props.content}
        </h1>
      </div>
    </a>
  );
}
export default NavBarSmallContentHref;

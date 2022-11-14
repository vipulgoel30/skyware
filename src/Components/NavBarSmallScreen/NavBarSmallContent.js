import SkywareLogo from "../../Images/SkywareLogo.webp";

import NavBarSmallContentHref from "./NavBarSmallContentHref";

function NavBarSmallContent(props) {
  return (
    <div className="w-screen relative block navbar:hidden">
      <div
        className="fixed top-0 w-screen z-[7] bg-white flex justify-center py-3 shadow-md "
        data-aos="fade-down"
      >
        <img loading="eager" src={SkywareLogo} className="w-32 h-8"></img>
      </div>
      <div
        className="fixed z-[6] top-0 w-full bg-white py-24  min-h-screen h-screen overflow-y-scroll "
        data-aos="fade-up"
      >
        <div className="flex flex-col   items-start px-12 gap-4">
          <NavBarSmallContentHref
            content={"Home"}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentHref
            content={"About Us"}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentHref
            content={"Product"}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentHref
            content={"blogs"}
            target={true}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentHref
            content={"careers"}
            target={true}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentHref
            content={"Contact Us"}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentHref
            content={"Supported By"}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentHref
            content={"team"}
            target={true}
            navStateSmallChanger={props.navStateSmallChanger}
          />
        </div>
      </div>
    </div>
  );
}
export default NavBarSmallContent;

import SkywareLogo from "../../Images/SkywareLogo.png";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
// import NavBarSmallContentItem from "./NavBarSmallContentHref";
import NavBarSmallContentHref from "./NavBarSmallContentHref";
import NavBarSmallContentLink from "./NavBarSmallContentLink";
function NavBarSmallContent(props) {
  return (
    <div className="w-screen relative block navbar:hidden">
      <div
        className="fixed top-0 w-screen z-[5] bg-white flex justify-center py-3 shadow-md "
        data-aos="fade-down"
      >
        <img src={SkywareLogo} className="w-32 h-8"></img>
      </div>
      <div
        className="fixed z-[2] top-0 w-full bg-white py-24  min-h-screen h-screen overflow-y-scroll "
        data-aos="fade-up"
      >
        <div className="flex flex-col   items-start px-12 gap-4">
          <NavBarSmallContentHref
            content={"Home"}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentHref
            content={"About"}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentHref
            content={"Solution"}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentLink
            content={"Blog"}
            link={"blogs"}
            navStateSmallChanger={props.navStateSmallChanger}
          />
          <NavBarSmallContentLink
            content={"Career"}
            link={"careers"}
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
          <NavBarSmallContentLink
            content={"Team"}
            link={"team"}
            navStateSmallChanger={props.navStateSmallChanger}
          />
        </div>
      </div>
    </div>
  );
}
export default NavBarSmallContent;

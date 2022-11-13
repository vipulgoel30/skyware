import SkywareLogo from "../../Images/SkywareLogo.png";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
function NavBarSmallContent(props) {
  return (
    props.state && (
      <div className="w-screen relative ">
        <div
          className="fixed top-0 w-screen bg-white flex justify-center py-3 shadow-md "
          data-aos="fade-down"
        >
          <img src={SkywareLogo} className="w-52 h-16"></img>
        </div>
        <div
          className="absolute top-0 w-full -z-10 pt-32  min-h-screen h-fit  "
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-12 items-center justify-between">
            <a href="#" className="w-full">
              <div className="flex items-center justify-evenly">
                <div className="text-4xl overflow-hidden w-12 h-12 rounded-full">
                  <AiOutlineHome />
                </div>
                <h1 className="text-4xl">Home</h1>
              </div>
            </a>
            <a href="#" className="w-full">
              <div className="flex items-center justify-evenly">
                <div className="text-3xl text-red-600">
                  <SiAboutdotme />
                </div>
                <h1 className="text-4xl">About</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  );
}
export default NavBarSmallContent;

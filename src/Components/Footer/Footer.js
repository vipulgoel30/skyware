import SkywareLogo from "../../Images/SkywareLogo.png";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import {
  AiOutlineCopyright,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-screen  h-fit py-12 px-4 bg-[#0a2a38] shadow-2xl flex flex-col  items-center text-white overflow-hidden">
      <div className="w-fit flex flex-col gap-16">
        <div className="flex gap-2 sm:gap-8 md:gap-16  justify-evenly">
          <div className="flex flex-col  max-w-3xl ">
            <img
              src={SkywareLogo}
              className="w-32 h-8 md:w-54 md:h-12 mb-2 ml-4"
            ></img>
            <a
              href="https://goo.gl/maps/2uGH4UFbgMhCQLrp7"
              target="_blank"
              className="flex items-center  opacity-60 gap-2 mb-4"
            >
              <FaLocationArrow className=""></FaLocationArrow>
              <span className="open-sans tracking-wide">New Delhi</span>
            </a>
            <a
              href="tel:8665562570"
              className="flex items-center  opacity-60 gap-2"
            >
              <MdOutlineCall className=""></MdOutlineCall>
              <span className="open-sans tracking-wide">+91 98689 33399</span>
            </a>
            <a
              href="mailto:info@skyware.in"
              className="flex items-center  opacity-60 gap-2"
            >
              <CiMail className=""></CiMail>
              <span className="open-sans tracking-wide">info@skyware.in</span>
            </a>
          </div>
          <div className="flex flex-col gap-3 max-w-3xl ">
            <h1 className="montser  opacity-90 uppercase text-base md:text-xl mb-2 tracking-widest font-semibold">
              Products
            </h1>

            <a
              href="#"
              target="_blank"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Detector
            </a>
            <a
              href="#"
              target="_blank"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Nodes
            </a>
            <a
              href="https://goo.gl/maps/2uGH4UFbgMhCQLrp7"
              target="_blank"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Changer
            </a>
          </div>
          <div className="flex flex-col gap-3 max-w-3xl">
            <h1 className="montser  opacity-90 uppercase text-lg md:text-xl mb-2 tracking-widest font-semibold">
              Resources
            </h1>

            <Link
              to="/blogs"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Career
            </Link>
          </div>
          <div className=" flex-col gap-3 max-w-3xl hidden md:flex">
            <h1 className=" montser  opacity-90 uppercase text-lg md:text-xl mb-2 tracking-widest font-semibold">
              Company
            </h1>

            <a
              href="#"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              About Us
            </a>
            <Link
              to="/team"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Team
            </Link>
            <a
              href="#Testimonial"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Testimonials
            </a>
            <a
              href="#Contact Us"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="border-t-[1px] border-[rgba(255,255,255,.4)] pt-2  w-full flex justify-between items-center">
          <div className=" opacity-60  items-center gap-1 hidden md:flex">
            <span>Copyright </span>
            <AiOutlineCopyright></AiOutlineCopyright>
            <em> Skyware Automation </em>
          </div>
          <div className="flex gap-4">
            <Link
              to="/"
              className="opacity-70  font-medium open-sans tracking-wide"
            >
              Privacy
            </Link>
            <Link
              to="/"
              className="opacity-70  font-medium open-sans tracking-wide"
            >
              Terms
            </Link>
            <Link
              to="/"
              className="opacity-70  font-medium open-sans tracking-wide"
            >
              Security
            </Link>
          </div>
          <div className="flex gap-4 text-4xl items-center">
            <AiFillTwitterCircle className="opacity-70" />
            <AiFillLinkedin className="opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
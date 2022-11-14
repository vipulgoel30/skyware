import SkywareLogo from "../../Images/SkywareLogo.webp";
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
    <div className="flex justify-center w-screen  h-fit py-12 px-4 bg-[#0a2a38] shadow-2xl text-white">
      <div className="w-fit flex flex-col gap-16">
        <div className="grid grid-cols-1 grid-row-4 gap-8 xsm:grid-cols-2 xsm:grid-rows-2 md:grid-cols-4 md:grid-rows-1">
          <div className="flex flex-col  ">
            <img loading="eager" src={SkywareLogo} className="w-54 h-12 mb-2 ml-4"></img>
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
          <div className="flex flex-col gap-3  ">
            <h1 className="montser  opacity-90 uppercase text-xl mb-2 tracking-widest font-semibold">
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
          <div className="flex flex-col gap-3 ">
            <h1 className="montser  opacity-90 uppercase text-xl mb-2 tracking-widest font-semibold">
              Resources
            </h1>

            <a
              href="/blogs"
              target="_blank"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Blog
            </a>
            <a
              href="/careers"
              target="_blank"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Career
            </a>
          </div>
          <div className=" flex-col gap-3  flex">
            <h1 className=" montser  opacity-90 uppercase text-xl mb-2 tracking-widest font-semibold">
              Company
            </h1>

            <a
              href="#"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              About Us
            </a>
            <a
              href="/team"
              target="_blank"
              className="  opacity-70  font-medium open-sans tracking-wide"
            >
              Team
            </a>
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
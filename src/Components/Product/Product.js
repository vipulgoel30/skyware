import { InView } from "react-intersection-observer";
import ProductImage from "./ProductImage";
import SolutionChart from "./SolutionChart";
import consoleImage from "../../Images/consoleImage.webp";
import { GrNext } from "react-icons/gr";
function Product(props) {
  const options = {
    threshold: 1,
  };
  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        console.log(inView ? "Solution" : "Home");
        props.onChangeLinkSet(inView ? "Product" : "");
      }}
      // threshold=".2"
      id="Product"
    >
      <div className="pt-20 w-screen pb-28">
        <div
          className="flex items-center justify-center gap-4  mb-10"
          data-aos="fade-up"
        >
          <span className="w-12 h-1 bg-[#333] sm:w-16 md:w-20"></span>
          <h1 className=" text-2xl xsm:text-3xl sm:text-4xl md:text-5xl   open-sans font-extrabold uppercase tracking-[2px] text-slate-800   ">
            Product
          </h1>
          <span className="w-12 h-1 bg-[#333] sm:w-16 md:w-20"></span>
        </div>
        <p className="text-xl max-w-4xl text-center mx-auto dosis  leading-relaxed tracking-wider px-4 ">
          <span className="italic font-semibold">SKYWARE</span> aspires to trim
          down these massive losses through IoT and AI-enabled scientific
          storage systems that forecast spoilage using real-time data modeling
          and optimize the shelf life of the harvest. We provide IoT-based
          monitoring devices to deeply understand the behaviour of the commodity
          with respect to the environment it has been kept in with AI-backed
          virtual assistants for automated maintenance and remote support
          through our SAAS model.
        </p>
      </div>
      <div className="flex justify-evenly mb-32 items-center flex-col md:flex-row gap-10 md:gap-0">
        <ProductImage className="w-11/12 md:w-fit" />
        <div className="text-4xl flex flex-col md:flex-row gap-2 ">
          <GrNext className="animate-[productArrow_1s_ease-in-out_infinite_] text-[#555] rotate-90 md:rotate-0" />
          <GrNext className="animate-[productArrow_1s_ease-in-out_infinite_.2s] text-[#555] rotate-90 md:rotate-0" />
          <GrNext className="animate-[productArrow_1s_ease-in-out_infinite_.4s] text-[#555] rotate-90 md:rotate-0" />
          <GrNext className="animate-[productArrow_1s_ease-in-out_infinite_.6s] text-[#555] rotate-90 md:rotate-0" />
        </div>
        <img loading="eager" src={consoleImage} className="w-2/3 h-1/3 md:w-1/3 "></img>
      </div>
      <SolutionChart />
    </InView>
  );
}

export default Product;

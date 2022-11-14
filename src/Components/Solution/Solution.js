import { InView } from "react-intersection-observer";
import SolutionChart from "./SolutionChart";
function Solution(props) {
  const options = {
    threshold: 1,
  };
  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        console.log(inView ? "Solution" : "Home");
        props.onChangeLinkSet(inView ? "Solution" : "");
      }}
      // threshold=".2"
      id="Solution"
    >
      <div className="pt-20 w-screen pb-28">
        <div
          className="flex items-center justify-center gap-4  mb-10"
          data-aos="fade-up"
        >
          <span className="w-12 h-1 bg-[#333] sm:w-16 md:w-20"></span>
          <h1 className=" text-2xl xsm:text-3xl sm:text-4xl md:text-5xl   open-sans font-extrabold uppercase tracking-[2px] text-slate-800   ">
            Solution
          </h1>
          <span className="w-12 h-1 bg-[#333] sm:w-16 md:w-20"></span>
        </div>
        <p className="text-xl max-w-4xl text-center mx-auto dosis  leading-relaxed tracking-wider ">
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
      <SolutionChart />
    </InView>
  );
}

export default Solution;

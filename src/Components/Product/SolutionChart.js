import SkywareLogoSquare from "../../Images/SkywareLogoSquare.png";
import SolutionOneImage from "../../Images/solutionOne.jpg";
import SolutionTwoImage from "../../Images/SolutionTwo.jpg";
import SolutionThreeImage from "../../Images/SolutionThree.jpg";
import SolutionFiveImage from "../../Images/SolutionFIve.jpg";
import SolutionSixImage from "../../Images/SolutionSix.png";
import SolutionChartItem from "./SolutionChartItem";
function SolutionChart() {
  return (
    // <div className="w-screen flex justify-center items-center pb-20">
    //   <div
    //     className={`h-[${width}rem] border-2 border-black rounded-full w-[${height}rem] relative rotate-5`}
    //   >
    //     <div
    //       className={`absolute -top-[${
    //         1 / 30
    //       }rem] left-[36%]  -translate-y-[50%] -rotate-5 flex gap-1 items-center justify-center flex-col`}
    //     >
    //       <div className=" montser text-xl ">Spoilage detection</div>
    //       <img
    //         src={SolutionOne}
    //         className="w-28 h-28 rounded-full  animate-[pulseShadow_2s_linear_infinite] border-4 border-[rgba(96,165,250,.5)]"
    //       ></img>
    //     </div>
    //     <div className="absolute bottom-0 left-1/3 -translate-x-1/2 translate-y-1/2 -rotate-5 flex gap-4 items-center justify-center ">
    //       <div className=" montser  text-xl w-40 pt-5">Activity Planner</div>
    //       <img
    //         src={SolutionOne}
    //         className="w-28 h-28 rounded-full animate-[pulseShadow_2s_linear_infinite] border-4 border-[rgba(96,165,250,.5)] "
    //       ></img>
    //     </div>
    //     <div className="absolute top-1/3 left-0 -translate-x-3/4 -translate-y-1/2 -rotate-5 flex gap-2 ">
    //       <div className=" montser  text-xl w-52 pt-8">
    //         Shelf life prediction
    //       </div>
    //       <img
    //         src={SolutionOne}
    //         className="w-28 h-28 rounded-full animate-[pulseShadow_2s_linear_infinite] border-4 border-[rgba(96,165,250,.5)]"
    //       ></img>
    //     </div>
    //     <div className="absolute bottom-[27%] left-0 -translate-x-3/4 translate-y-1/2 -rotate-5 flex gap-2">
    //       <div className=" montser  text-xl w-52 pt-8 text-center">
    //         Commodity Health Score
    //       </div>
    //       <img
    //         src={SolutionOne}
    //         className="w-28 h-28 rounded-full animate-[pulseShadow_2s_linear_infinite] border-4 border-[rgba(96,165,250,.5)]"
    //       ></img>
    //     </div>
    //     <div className="absolute top-1/4 -right-4 translate-x-2/3 -translate-y-1/2 -rotate-5 flex gap-2">
    //       <img
    //         src={SolutionOne}
    //         className="w-28 h-28 rounded-full animate-[pulseShadow_2s_linear_infinite] border-4 border-[rgba(96,165,250,.5)]"
    //       ></img>
    //       <div className=" montser  text-xl break-words pt-8 ">
    //         24*7 Remote Access
    //       </div>
    //     </div>
    //     <div className="absolute bottom-[27%] right-0 translate-x-2/3 translate-y-1/2 -rotate-5 flex gap-2">
    //       <img
    //         src={SolutionOne}
    //         className="w-28 h-28 rounded-full animate-[pulseShadow_2s_linear_infinite] border-4 border-[rgba(96,165,250,.5)]"
    //       ></img>
    //       <div className=" montser  text-xl w-36 pt-8 text-center">
    //         Theft Alert
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-screen items-center gap-20 flex flex-col pb-20">
      <div
        className="flex items-center justify-center gap-4  mb-10"
        data-aos="fade-up"
      >
        <span className="w-12 h-1 bg-[#333] sm:w-16 md:w-20"></span>
        <h1 className=" text-lg xsm:text-xl sm:text-2xl md:text-3xl   open-sans font-extrabold uppercase tracking-[2px] text-slate-800   ">
          Features
        </h1>
        <span className="w-12 h-1 bg-[#333] sm:w-16 md:w-20"></span>
      </div>
      <SolutionChartItem
        colorOne="#4abdc0"
        colorTwo="#3ecfb0"
        title="Spoilage Detection"
        contentStart="Real time analysis of "
        contentEnd="microscopic activities detects all the spoilage possibilities as soon as possible."
        image={SolutionOneImage}
      />
      <SolutionChartItem
        colorOne="#ff8601"
        colorTwo="#fe4800"
        title="Shelf-Life Prediction"
        contentStart="our systems analyse  "
        contentEnd="numerous parameters to predict shelf life and suggest ways of maximising it"
        image={SolutionTwoImage}
      />
      <SolutionChartItem
        colorOne="#c8054b"
        colorTwo="#fa558d"
        title="Commodity Health Score"
        contentStart="a score that tells "
        contentEnd="you how long your commodity will survive "
        image={SolutionThreeImage}
      />
      <SolutionChartItem
        colorOne="#ffde59"
        colorTwo="#ffac52"
        title="Activity Planner"
        contentStart="an AI based assistant activity "
        contentEnd="planner for warehouse managers that plans and automates the upcoming activities"
        image={SolutionOneImage}
      />
      <SolutionChartItem
        colorOne="#89d7fb"
        colorTwo="#14aef1"
        title="24*7 Remote Access"
        contentStart="our Mobile Software "
        contentEnd="gives Remote Access to the warehouse. it digitalise many activities"
        image={SolutionFiveImage}
      />
      <SolutionChartItem
        colorOne="#630f31"
        colorTwo="#f61597"
        title="Theft Alert"
        contentStart="motion sensing technology "
        contentEnd="incorporated in our devices makes your warehouse an anti-Theft facility"
        image={SolutionSixImage}
      />
    </div>
  );
}
export default SolutionChart;

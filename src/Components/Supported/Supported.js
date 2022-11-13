import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import AboutSection from "../../Images/AboutSection.jpg";
import { GrPrevious, GrNext } from "react-icons/gr";
function Supported(props) {
  const data = [
    {
      url: "https://www.skyware.in/Assets/SupportedBy/startup-India.png",
      data: "We are recognised and certified by the Department for Promotion of Industry and Internal Trade (DPIIT) under the Startup India scheme.",
    },
    {
      url: "https://www.skyware.in/Assets/SupportedBy/American-Center.png",
      data: "The American Center is where the U.S. Embassy conducts people-to-people diplomacy in New Delhi.  We are supported by the American Centre.",
    },
    {
      url: "https://www.skyware.in/Assets/SupportedBy/Nexus.jpg",
      data: " Nexus is our Incubation partner Nexus is a collaboration between the U.S. Embassy, New Delhi and ACIR. ",
    },
    {
      url: "https://www.skyware.in/Assets/SupportedBy/EP.png",
      data: "We are Incubated at Electropreneur Park, New Delhi. EP is an Incubation center for ESDM startups, funded by the (MeitY) and managed by (STPI). ",
    },
    {
      url: "https://www.skyware.in/Assets/SupportedBy/BSSC.png",
      data: " We are recognised in the top 50 international startups under BSSC - Startup Wheel competition.",
    },
    {
      url: "https://www.skyware.in/Assets/SupportedBy/NIAM.jpg",
      data: " CCS NIAM is an Agri-business Incubator, supported by the Department of Agriculture, Cooperation and Farmers’ Welfare (DAC&FW).",
    },
    {
      url: "https://www.skyware.in/Assets/SupportedBy/i5-Summit.png",
      data: " We were awarded as the winner of i5 Summit 2021, 7th edition of central India’s largest entrepreneurship summit. It was hosted by IIM Indore.",
    },
  ];
  const [previous, setPrevious] = useState(6);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  function setData(event) {
    // console.log(event.target);
    const requested = Number(event.target.getAttribute("name"));
    // console.log(requested);
    setCurrent(requested);
    setPrevious(requested === 0 ? 6 : requested - 1);
    setNext(requested === 6 ? 0 : requested + 1);
    // console.log(data[current].url);
  }
  function previousScroll() {
    setPrevious(current);
    setCurrent(next);
    setNext(next === 6 ? 0 : next + 1);
  }
  function nextScroll() {
    setPrevious(previous === 0 ? 6 : previous - 1);
    setCurrent(previous);
    setNext(current);
  }
  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        console.log(inView, entry);
        props.onChangeLinkSet(inView ? "Supported" : "Home");
      }}
      id="Supported"
      className="h-fit min-h-screen w-screen  flex flex-col justify-center relative bg-[#eee]"
    >
      <div className="flex items-center justify-center gap-4 mt-16 mb-28">
        <span className="w-12 h-1 bg-[#333] sm:w-16 md:w-20"></span>
        <h1 className=" text-2xl xsm:text-3xl sm:text-4xl md:text-5xl   open-sans font-extrabold uppercase tracking-[2px] text-slate-800   ">
          Supported By
        </h1>
        <span className="w-12 h-1 bg-[#333] sm:w-16 md:w-20"></span>
      </div>
      <div className="flex gap-4 w-[95vw] sm:w-[90vw] max-w-6xl mx-auto items-center transition-all  relative justify-center ">
        <GrPrevious
          className=" -left-8 text-2xl  transition-all duration-100 hover:scale-150 active:scale-110"
          onClick={previousScroll}
        />
        <div className=" w-[50%] sm:w-[40%] md-w[30%] -mr-[100px] sm:-mr-[90px] bg-white md:-mr-[60px] lg:mr-0 opacity-30 xsm:opacity-50 sm:opacity-70 md:opacity-90 shadow-[2px_2px_32px_rgba(0,0,0,.2)]  rounded-xl relative min-h-[16rem] h-fit   flex items-center justify-center px-2 hover:scale-[1.03] transition-all duration-500">
          <img
            src={data[previous]?.url}
            className="w-12 h-12 xsm:w-16 xsm:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2 shadow-2xl"
          ></img>
          <p className="text-center text-[.5rem] xsm:text-sm sm:text-base">
            {data[previous]?.data}
          </p>
        </div>
        <div className="w-[90%] sm:w-[50%] md-w[40%]  rounded-xl relative z-[1] bg-white shadow-[2px_2px_32px_rgba(0,0,0,.4)] flex items-center justify-center  px-2 xsm:px-4 min-h-[18rem] hover:scale-[1.03] transition-all duration-500">
          <img
            src={data[current]?.url}
            className="w-16 h-16 xsm:w-20 xsm:h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2 shadow-2xl"
          ></img>
          <p className="text-sm xsm:text-lg sm:text-xl text-center ">
            {data[current]?.data}
          </p>
        </div>
        <div className="w-[50%] sm:w-[40%] md-w[30%] -ml-[100px] sm:-ml-[90px] bg-white md:-ml-[60px] lg:ml-0 opacity-30 xsm:opacity-50 sm:opacity-70 md:opacity-90 -z-[0]  rounded-xl relative shadow-[2px_2px_32px_rgba(0,0,0,.2)] flex items-center  justify-center px-2 min-h-[16rem] hover:scale-[1.03] transition-all duration-500">
          <img
            src={data[next]?.url}
            className="w-12 h-12 xsm:w-16 xsm:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full absolute top-0 -translate-x-1/2 -translate-y-1/2 left-1/2 shadow-2xl"
          ></img>
          <p className=" text-center text-[.5rem] xsm:text-sm sm:text-base">
            {data[next]?.data}
          </p>
        </div>

        <GrNext
          className="  -right-8 text-2xl  transition-all duration-100 hover:scale-150 active:scale-110"
          onClick={nextScroll}
        />
      </div>
      <div className="my-20 flex gap-3 w-screen justify-center ">
        <div
          className={`w-3 h-3 shadow-xl rounded-full  ${
            current === 0
              ? "bg-gradient-to-r from-primary to-secondary"
              : "bg-slate-300"
          }`}
          name={0}
          onClick={setData}
        ></div>
        <div
          className={`w-3 h-3 shadow-xl rounded-full  ${
            current === 1
              ? "bg-gradient-to-r from-primary to-secondary"
              : "bg-slate-300"
          }`}
          name={1}
          onClick={setData}
        ></div>
        <div
          className={`w-3 h-3 shadow-xl rounded-full  ${
            current === 2
              ? "bg-gradient-to-r from-primary to-secondary"
              : "bg-slate-300"
          }`}
          name={2}
          onClick={setData}
        ></div>
        <div
          className={`w-3 h-3 shadow-xl rounded-full  ${
            current === 3
              ? "bg-gradient-to-r from-primary to-secondary"
              : "bg-slate-300"
          }`}
          name={3}
          onClick={setData}
        ></div>
        <div
          className={`w-3 h-3 shadow-xl rounded-full  ${
            current === 4
              ? "bg-gradient-to-r from-primary to-secondary"
              : "bg-slate-300"
          }`}
          name={4}
          onClick={setData}
        ></div>
        <div
          className={`w-3 h-3 shadow-xl rounded-full  ${
            current === 5
              ? "bg-gradient-to-r from-primary to-secondary"
              : "bg-slate-300"
          }`}
          name={5}
          onClick={setData}
        ></div>
        <div
          className={`w-3 h-3 shadow-xl rounded-full  ${
            current === 6
              ? "bg-gradient-to-r from-primary to-secondary"
              : "bg-slate-300"
          }`}
          name={6}
          onClick={setData}
        ></div>
      </div>
    </InView>
  );
}

export default Supported;

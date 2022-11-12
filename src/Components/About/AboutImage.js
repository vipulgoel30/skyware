import Image1 from "../../Images/Node.jpeg";
import Image2 from "../../Images/HubImage.jpeg";
import Image3 from "../../Images/NodeSide.jpeg";
import AboutImageNode from "./AboutImageNode";
function AboutImage() {
  return (
    <div className="w-2/5 relative h-80 ">
      <AboutImageNode top="0" left="0" z="0" shadow="green" image={Image1} />
      <AboutImageNode
        bottom="0"
        left="20%"
        z="4"
        shadow="orange"
        image={Image2}
      />
      <AboutImageNode right="0" top="10%" z="2" shadow="cyan" image={Image3} />
      {/* <img
        src={Image1}
        className="absolute w-3/5 h-3/5 top-0 left-0 shadow-2xl border-black border-[.1px] shadow-green-200  z-[0] "
      ></img>
      <img
        src={Image2}
        className="absolute w-3/5 h-3/5 bottom-0 left-[20%] z-[4] shadow-2xl shadow-slate-700   border-black border-[.1px] "
      ></img>
      <div
        className={`bg-[url('')] absolute w-3/5 h-3/5 right-0 top-[10%] z-[2] shadow-2xl shadow-cyan-200 border-black border-[.1px]  hover:z-[5] transition-all hover:duration-500 hover:scale-105`}
      ></div> */}
      {/* <img src={Image3} className=" "></img> */}
    </div>
  );
}
export default AboutImage;

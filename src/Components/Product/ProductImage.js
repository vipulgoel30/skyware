import Image1 from "../../Images/Node.webp";
import Image2 from "../../Images/HubImage.webp";
import Image3 from "../../Images/NodeSide.webp";
import ProductImageNode from "./ProductImageNode";
function ProductImage() {
  return (
    <div className="w-11/12 md:w-1/3 relative h-80 ">
      <ProductImageNode
        top="0"
        left="0"
        z="0"
        shadow="green"
        image={Image1}
        name={"Node"}
      />
      <ProductImageNode
        bottom="0"
        left="20%"
        z="4"
        shadow="orange"
        image={Image2}
        name={"Hub"}
      />
      <ProductImageNode
        right="0"
        top="10%"
        z="2"
        shadow="cyan"
        image={Image3}
        name={"Node Side"}
      />
      {/* <img loading="eager"
        src={Image1}
        className="absolute w-3/5 h-3/5 top-0 left-0 shadow-2xl border-black border-[.1px] shadow-green-200  z-[0] "
      ></img>
      <img loading="eager"
        src={Image2}
        className="absolute w-3/5 h-3/5 bottom-0 left-[20%] z-[4] shadow-2xl shadow-slate-700   border-black border-[.1px] "
      ></img>
      <div
        className={`bg-[url('')] absolute w-3/5 h-3/5 right-0 top-[10%] z-[2] shadow-2xl shadow-cyan-200 border-black border-[.1px]  hover:z-[5] transition-all hover:duration-500 hover:scale-105`}
      ></div> */}
      {/* <img loading="eager" src={Image3} className=" "></img> */}
    </div>
  );
}
export default ProductImage;

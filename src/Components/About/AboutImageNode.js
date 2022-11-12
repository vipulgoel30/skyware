import { useEffect } from "react";
import styled from "styled-components";

function AboutImageNode(props) {
  const classBuild = props.name.split(" ").join("");
  const ImageComponent = styled.div`
    top: ${props.top};
    bottom: ${props.bottom};
    left: ${props.left};
    right: ${props.right};
  `;
  useEffect(() => {
    const img = document.querySelector(`.${classBuild}img`);
    const element = document.querySelector(`.${classBuild}`);
    img.addEventListener("mouseover", () => {
      element.style.display = "flex";
      element.style.width = "100%";
      element.style.height = "100%";
    });
    img.addEventListener("mouseout", () => {
      element.style.display = "hidden";
      element.style.width = "0";
      element.style.height = "0";
    });
  });
  return (
    <ImageComponent
      className={`absolute w-3/5 h-3/5  z-[${props.z}]   border-black border-[1px] hover:z-[5] hover:scale-110 transition-all duration-500 rounded-2xl overflow-hidden `}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={props.image}
          className={`w-full h-full ${classBuild}img`}
          //   onMouseEnter={(event) => {
          //     console.log("Over");
          //     const element = document.querySelector(`.${classBuild}`);

          //     element.style.display = "flex";
          //     element.style.width = "100%";
          //     element.style.height = "100%";
          //   }}
          //   onMouseOut={() => {
          //     console.log("Out");
          //     const element = document.querySelector(`.${classBuild}`);
          //     element.style.display = "hidden";
          //     element.style.width = "0";
          //     element.style.height = "0";
          //   }}
        ></img>
        <div
          className={`${classBuild} hidden   absolute top-0  left-0   transition-all duration-500 justify-center items-center bg-gradient-to-b from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,.5)] to-[rgba(0,0,0,0.6)] text-white text-xl `}
        >
          <p>{props.name}</p>
        </div>
      </div>
    </ImageComponent>
  );
}
export default AboutImageNode;

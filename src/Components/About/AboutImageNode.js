import styled from "styled-components";

function AboutImageNode(props) {
  const ImageComponent = styled.div`
    // background: url(${props.image});
    // box-shadow: 1px 1px 30px 5px rgba(0, 0, 0, 0.4);
    // background-size: cover;
    top: ${props.top};
    bottom: ${props.bottom};
    left: ${props.left};
    right: ${props.right};
    // &:hover {
    //   background: linear-gradient(
    //       to right,
    //       rgba(0, 0, 0, 0.5),
    //       rgba(0, 0, 0, 0.6)
    //     )
    //     url(${props.image});
    // }
  `;
  return (
    <ImageComponent
      className={`absolute w-3/5 h-3/5  z-[${props.z}]   border-black border-[.2px] hover:z-[5] hover:scale-105 transition-all duration-500] `}
    >
      <div className="relative w-full h-full">
        <img src={props.image} className="w-full h-full"></img>
        <div className="absolute top-0 left-0 ">
          <p>Thi is test</p>
        </div>
      </div>
    </ImageComponent>
  );
}
export default AboutImageNode;

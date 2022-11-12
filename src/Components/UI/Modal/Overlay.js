import styled from "styled-components";
const OverlayComponent = styled.div`
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  z-index: 100;
`;

const Overlay = (props) => {
  return <OverlayComponent onClick={props.changeVisibility}></OverlayComponent>;
};

export default Overlay;

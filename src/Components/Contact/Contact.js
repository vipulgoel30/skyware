import { InView } from "react-intersection-observer";
import styled from "styled-components";
function Contact(props) {
  const Background = styled.div`
    background: ;
  `;
  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        console.log(inView, entry);
        props.onChangeLinkSet(inView ? "Contact" : "Home");
      }}
      id="About"
      className="h-fit min-h-screen"
    ></InView>
  );
}

export default Contact;

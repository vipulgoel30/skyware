import { InView } from "react-intersection-observer";
import styled from "styled-components";
import AboutSectionImage from "../../Images/AboutSection.jpg";
import AboutImage from "./AboutImage";
function About(props) {
  //   const AboutBackground = styled.div`
  //     background: linear-gradient(
  //         to right,
  //         rgba(0, 0, 0, 0.4),
  //         rgba(0, 0, 0, 0.6)
  //       ),
  //       url(${AboutSectionImage});
  //     background-repeat: no-repeat;
  //     background-size: cover;
  //     background-position: center;
  //     font-family: "Lato", sans-serif;
  //   `;
  return (
    <InView
      as="div"
      onChange={(inView, entry) =>
        props.onChangeLinkSet(inView ? "About" : "Home")
      }
      id="About"
    >
      <div className="min-h-screen h-fit flex justify-between gap-8 items-center py-44 px-16 w-screen">
        <AboutImage />
        <div className=" flex flex-col items-center justify-center text-black w-3/5">
          <h1 className="">About</h1>
          <p>
            Skyware envisions a future with zero post harvest storage losses.
            Currently 1 Billion MT of food is wasted annually during the
            processing stage. Skyware holds the virtue to turn the tables around
            this problem with its high-tech IoT and AI-based scientific storage
            solutions. Built with the help of modern technology our products can
            mitigate the inefficiencies during warehouse management and turn the
            storage unit into a modern high-tech facility with added benefits to
            the customer. The likes of our storage solutions don’t exist in the
            Indian Markets.
          </p>
        </div>
      </div>
    </InView>
  );
}
export default About;

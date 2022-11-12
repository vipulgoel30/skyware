import { InView } from "react-intersection-observer";
import styled from "styled-components";
import AboutSectionImage from "../../Images/AboutSection.jpg";
import AboutImage from "./AboutImage";
function About(props) {
    const AboutBackground = styled.div`
      background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.6)
        ),
        url(${AboutSectionImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      font-family: "Lato", sans-serif;
      min-height: 50vh;
    `;
    return (
      <InView
        as="div"
        onChange={(inView, entry) =>
          props.onChangeLinkSet(inView ? "About" : "Home")
        }
        id="About"
        className="h-fit min-h-screen"
      >
        <AboutBackground className=" h-fit flex items-center justify-center ">
          <h1 className="text-white text-5xl tracking-widest ">About Us</h1>
        </AboutBackground>

        <div className="w-screen sm:w-11/12 md:w-4/5 flex flex-col items-center justify-center text-black  mt-12 italic leading-loose mx-auto text-xl">
          <span className=""></span>
          <p
            className=""
            style={{
              fontFamily: " 'Dosis', sans-serif",
            }}
          >
            <span className="text-3xl text-slate-600 pl-8 pr-3">&#8220;</span>
            <spam className="text-2xl font-semibold">Skyware</spam> envisions a
            future with zero post harvest storage losses. Currently 1 Billion MT
            of food is wasted annually during the processing stage. Skyware
            holds the virtue to turn the tables around this problem with its
            high-tech IoT and AI-based scientific storage solutions. Built with
            the help of modern technology our products can mitigate the
            inefficiencies during warehouse management and turn the storage unit
            into a modern high-tech facility with added benefits to the
            customer. The likes of our storage solutions don’t exist in the
            Indian Markets.
            <span className="text-3xl text-slate-800 pl-3">&#8221;</span>
          </p>
        </div>
      </InView>
    );
}
export default About;

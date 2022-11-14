import styled from "styled-components";
import LaurelsImage from "../../Images/LaurelsImage.jpg";
import summit from "../../Images/summit.png";
import together from "../../Images/together.png";
import startupWheel from "../../Images/startupwheel.jpg";
import { InView } from "react-intersection-observer";
function Laurels(props) {
  const LaurelsBackground = styled.div`
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.6)
      ),
      url(${LaurelsImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-family: "Lato", sans-serif;
    min-height: 40vh;
  `;
  return (
    <>
      <InView
        as="div"
        onChange={(inView, entry) => {
          console.log(inView, entry);
          props.onChangeLinkSet(inView ? "Laurels" : "");
        }}
        id="Laurels"
        // threshold={0.2}
        className="h-fit min-h-screen"
      >
        <LaurelsBackground className=" h-fit flex items-center justify-center py-20">
          <div
            className="flex items-center justify-center gap-4  "
            data-aos="fade-up"
          >
            <span className="w-12 h-1 bg-white opacity-75 sm:w-16 md:w-20"></span>
            <h1 className=" text-2xl xsm:text-3xl sm:text-4xl md:text-5xl   open-sans font-extrabold uppercase tracking-[2px] text-white opacity-80   ">
              Laurels
            </h1>
            <span className="w-12 h-1 bg-white opacity-75 sm:w-16 md:w-20"></span>
          </div>
        </LaurelsBackground>
        <div className="w-screen flex justify-center my-24 px-10">
          <div className="w-fit max-w-5xl grid  grid-cols-1 grid-rows-3 xsm:grid-cols-2 xsm:grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-12 ">
            <div className="w-fit  h-full px-4 text-center py-10 shadow-[2px_2px_10px_2px_rgba(255,0,0,.4)] lato  ">
              <img src={together} className="h-28 w-full mb-8"></img>
              One of the top 6 finalists at the Together 2022 Entrepreneurial
              Bootcamp.
            </div>
            <div className="w-fit h-full px-4 text-center py-10 shadow-[2px_2px_10px_2px_rgba(0,255,0,.4)]   ">
              <img src={startupWheel} className="h-28 w-full mb-8"></img>
              We are recognised in the top 50 international startups under the
              BSSC Startup Wheel Competition in Vietnam.
            </div>
            <div className="w-fit xsm:w-1/2 md:w-full text-center h-full px-4 py-10 shadow-[2px_2px_10px_2px_rgba(0,0,255,.4)]   col-span-1 justify-self-center xsm:col-span-2 md:col-span-1">
              <div classname="flex justify-center ">
                <img src={summit} className="h-28 w-full mb-8"></img>
                We were awarded as the winner of i5 summit 2021, 7th edition of
                India's largest entrepreneurship summit hosted by IIM Indore.
              </div>
            </div>
          </div>
        </div>
      </InView>
    </>
  );
}
export default Laurels;

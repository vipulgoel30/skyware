import { InView } from "react-intersection-observer";
import styled from "styled-components";
import TestimonialImage from "../../Images/Testimonial.webp";
import TestimonialItem from "./TestimonialItem";
function Testimonials(props) {
  const Background = styled.div`
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.6)
      ),
      url(${TestimonialImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        console.log(inView, entry);
        props.onChangeLinkSet(inView ? "Testimonial" : "Home");
      }}
      id="Testimonial"
      className="h-fit min-h-screen"
    >
      <Background className="pt-10 pb-32 ">
        <div className="flex flex-col items-center gap-16">
          <div
            className="flex items-center justify-center gap-4 pt-16 "
            data-aos="fade-up"
          >
            <span className="w-12 h-1 bg-white opacity-75 sm:w-16 md:w-20"></span>
            <h1 className=" text-2xl xsm:text-3xl sm:text-4xl md:text-5xl   open-sans font-extrabold uppercase tracking-[2px] text-white opacity-80   ">
              Testimonials
            </h1>
            <span className="w-12 h-1 bg-white opacity-75 sm:w-16 md:w-20"></span>
          </div>
          <TestimonialItem
            url="https://www.chinimandi.com/wp-content/uploads/2019/06/ff2e5acb-piyush-goyal.jpg"
            data="India has changed its mindset to move from incremental changes to transformational changes. The Central Warehousing Corporation and Food Corporation of India are working on modern crop storage plans for the benefit of farmers.” Said the Ministry for Consumer Affairs, Food and Public Distribution.Goyal told FCI to adopt digital technologies, internet of things, and artificial intelligence (AI)to improve its functioning. "
          />
          <TestimonialItem
            reverse="true"
            url="https://wiki.meramaal.com/wp-content/uploads/2018/07/mofpi.jpg"
            data="The Centre has developed an online portal to collect details about private and government warehouses, a move that will enable the monitoring of storage availability on a real time basis, a senior Food Ministry Official said on 29th Jun 2021."
          />
        </div>
      </Background>
    </InView>
  );
}
export default Testimonials;

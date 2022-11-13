import { InView } from "react-intersection-observer";
function Testimonials(props) {
  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        console.log(inView, entry);
        props.onChangeLinkSet(inView ? "Testimonial" : "Home");
      }}
      id="About"
      className="h-fit min-h-screen"
    >
      <div className="flex flex-col items-center"></div>
    </InView>
  );
}
export default Testimonials;

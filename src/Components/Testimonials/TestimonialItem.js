function TestimonialItem(props) {
  return (
    <div
      className={`flex  skew-x-[-16deg] bg-white text-slate-600 px-9 py-5 opacity-90 mx-16 gap-10 max-w-4xl items-center ${
        props.reverse ? "self-end" : "self-start"
      }`}
    >
      <img
        src={props.url}
        className="w-32 h-32 rounded-full skew-x-[16deg]"
      ></img>
      <div className="skew-x-[16deg] montser">
        <h1>{props.data}</h1>
      </div>
    </div>
  );
}
export default TestimonialItem;

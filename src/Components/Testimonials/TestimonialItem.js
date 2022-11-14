function TestimonialItem(props) {
  return (
    <div
      className={`flex flex-col navbar:flex-row skew-x-[0deg] navbar:skew-x-[-10deg] bg-white border-primary border-l-8 text-slate-600 px-9 py-5 opacity-90 mx-4 gap-10 max-w-4xl items-center ${
        props.reverse ? "self-end" : "self-start"
      }`}
    >
      <img loading="eager"
        src={props.url}
        className="w-32 h-32 rounded-full skew-x-[0deg] navbar:skew-x-[10deg]"
      ></img>

      <div className="skew-x-[0deg] montser navbar:skew-x-[10deg]">
        <h1>{props.data}</h1>
      </div>
    </div>
  );
}
export default TestimonialItem;

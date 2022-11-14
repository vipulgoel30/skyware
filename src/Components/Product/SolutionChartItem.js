function SolutionChartItem(props) {
  return (
    <div className="relative rounded-[3rem] shadow-[2px_2px_10px_2px_rgba(0,0,0,.2)] px-12 py-4 flex  mx-2 max-w-3xl w-[95vw] xsm:w-[90vw] sm:w-[80vw] md:w-[70vw] justify-between  bg-white  items-center ">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  -rotate-[3.5deg] w-[99%] h-full -z-[2] rounded-[3rem]"
        style={{
          background: `linear-gradient(to right,${props.colorOne},${props.colorTwo})`,
        }}
      ></div>
      <div className="flex flex-col gap-3 ">
        <h1
          className="font-extrabold lato tracking-wider text-xl"
          style={{
            color: `${props.colorTwo}`,
          }}
        >
          {props.title}
        </h1>
        <p
          className="open-sans text-sm tracking-wider"
          style={{
            color: `${props.colorOne}`,
          }}
        >
          {props.contentStart}
          <br /> {props.contentEnd}
        </p>
      </div>

      <img
        src={props.image}
        className="w-20 h-20 xsm:w-24 xsm:h-24 sm:w-28 sm:h-28 rounded-full "
      ></img>
    </div>
  );
}
export default SolutionChartItem;

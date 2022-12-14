import loaderImage from "../Images/loaderLogo.webp";
function Loader() {
  return (
    <div className="w-screen h-screen flex flex-col gap-16 justify-center items-center bg-white fixed top-0 left-0 z-50">
      <img loading="eager" alt="" src={loaderImage} className="w-48 h-48 animate-[logoLoader_1s_ease-in-out_infinite]" />
      <div className="text-3xl montser tracking-widest animate-[pulse_1s_ease-in-out_infinite] ">
        Welcome to world of Skyware{" "}
      </div>
    </div>
  );
}

export default Loader;

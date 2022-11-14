import React, { useState } from "react";
import Overlay from "../UI/Modal/Overlay";
import LoginSignupModal from "./LoginSignupModal";
function LoginHandler() {
  const [formVisibility, setFormVisibility] = useState(false);
  function changeFormVisibilityHandler() {
    console.log(formVisibility);
    setFormVisibility((prevState) => !prevState);
  }
  return (
    <>
      <button
        className=" rounded-lg z-100 border-2 bg-blue-400  text-[#fff] hover:border-blue-400 hover:text-blue-400 hover:bg-white roboto  px-5 py-[.3rem] text-sm md:text-base lg:text-lg uppercase tracking-widest  duration-500 
       
  "
        onClick={changeFormVisibilityHandler}
      >
        Login
      </button>
      {formVisibility && (
        <div>
          <LoginSignupModal
            changeFormVisibility={changeFormVisibilityHandler}
          />
          <Overlay changeVisibility={changeFormVisibilityHandler} />
        </div>
      )}
    </>
  );
}
export default LoginHandler;

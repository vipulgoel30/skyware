import React, { useState } from "react";
import Overlay from "../UI/Modal/Overlay";
import LoginForm from "./LoginForm";
function LoginButton() {
  const [formVisibility, setFormVisibility] = useState(false);
  function changeFormVisibilityHandler() {
    console.log(formVisibility);
    setFormVisibility((prevState) => !prevState);
  }
  return (
    <>
      <button
        className="rounded-3xl z-100 bg-gradient-to-r from-primary to-secondary text-white font-mono px-4 py-2 text-xl relative hover:-translate-y-1 hover:scale-105 active:scale-95 duration-500 before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gradient-to-t before:from-primary before:to-primary before:transition-all before:w-full before:h-full
        hover:before:scale-150 hover:before:opacity-0 before:duration-500 before:rounded-3xl before:-z-10 before:opacity-100
  "
        onClick={changeFormVisibilityHandler}
      >
        Login
      </button>
      {formVisibility && (
        <div>
          <LoginForm changeFormVisibility={changeFormVisibilityHandler} />
          <Overlay changeVisibility={changeFormVisibilityHandler} />
        </div>
      )}
    </>
  );
}
export default LoginButton;

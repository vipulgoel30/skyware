import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
function InputLayout(props) {
  //   function labelShowHandler() {
  //     const label = document.querySelector(`label.${props.name}`);
  //     label.style.display = "block";
  //     label.style.transform = "translate(0,0)";
  //   }
  //   function labelHiddenHandler(event) {
  //     const label = document.querySelector(`label.${props.name}`);
  //     if (event.target.value === "") {
  //       label.style.display = "none";
  //     }
  //   }
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <div className="flex gap-3 flex-col">
      <label
        className={` text-lg transition-all duration-1000 px-6 font-bold tracking-wider  `}
      >
        {props.name}
      </label>
      <div className="w-full relative">
        <input
          type={
            props.type === "password"
              ? passwordShow
                ? "text"
                : "password"
              : props.type
          }
          className="w-full px-6 py-2   rounded-lg outline-none transition-all duration-500 shadow-xl   bg-[#b3c6d33b] placeholder:text-slate-500 focus:shadow-2xl focus:scale-[1.02] placeholder:tracking-wider"
          placeholder={props.placeholder}
          value={props.email}
          onChange={props.onValueChange}
          required
        ></input>

        {props.type === "password" && (
          <div
            className="absolute top-1/2 -translate-y-1/2 right-2 text-2xl hover:scale-[1.01]"
            onClick={() => {
              setPasswordShow((prevState) => !prevState);
            }}
          >
            {passwordShow ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible />}
          </div>
        )}
      </div>
    </div>
  );
}
export default InputLayout;

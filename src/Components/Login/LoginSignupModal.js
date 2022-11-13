import React, { useState } from "react";

import Modal from "../UI/Modal/Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { HiX } from "react-icons/hi";
function LoginSignupModal(props) {
  const [formType, setFormType] = useState("login");
  function formTypeHandler() {
    setFormType((prevState) => (prevState === "login" ? "signup" : "login"));
  }
  return (
    <Modal
      className="relative "
      style={{
        fontFamily: "'Lato',sans-serif",
      }}
    >
      <button
        className="absolute top-3 right-3 z-[10] text-2xl text-black"
        onClick={props.changeFormVisibility}
        data-aos="fade-in"
      >
        <HiX />
      </button>
      {formType === "login" ? (
        <LoginForm
          changeFormVisibility={props.changeFormVisibility}
          changeFormType={formTypeHandler}
        />
      ) : (
        <SignUpForm
          changeFormVisibility={props.changeFormVisibility}
          changeFormType={formTypeHandler}
        />
      )}
    </Modal>
  );
}
export default LoginSignupModal;

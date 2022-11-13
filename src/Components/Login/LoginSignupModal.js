import React, { useState } from "react";

import Modal from "../UI/Modal/Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { ImCross } from "react-icons/im";
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
      <button
        className="absolute top-0 -right-10 text-xl text-white"
        onClick={props.changeFormVisibility}
      >
        <ImCross />
      </button>
    </Modal>
  );
}
export default LoginSignupModal;

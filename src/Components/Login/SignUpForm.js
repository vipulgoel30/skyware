import React, { useState } from "react";
import { toast } from "react-toastify";
import InputLayout from "./InputLayout";
function SignUpForm(props) {
  function formSubmitHandlerSignup(event) {
    event.preventDefault();
    props.changeFormVisibility();
    const emailExists = localStorage.getItem(email);
    if (emailExists) {
      toast.warn("Email already exists!");
    } else {
      try {
        localStorage.setItem(email, [password, name]);
        toast.success("Successfully signup");
      } catch (e) {
        toast.error("Internal error");
      }
    }
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  function emailValueChangeHandler(event) {
    setEmail(event.target.value);
  }
  function nameValueChangeHandler(event) {
    setName(event.target.value);
  }
  function passwordValueChangeHandler(event) {
    console.log("Event triggered");
    setPassword(event.target.value);
  }

  return (
    <div
      className="w-[100vw] xsm:w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[50vw] max-h-[95vh] overflow-auto rounded-lg bg-white px-6 py-8  flex flex-col gap-8"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-lg">
          🖐 Welcome to <em className="font-semibold">Skyware</em> 🎉
        </h1>
        <h2 className="text-xl font-semibold">Create Your account.</h2>
      </div>
      <form
        className="flex flex-col gap-8  w-full "
        onSubmit={formSubmitHandlerSignup}
      >
        <InputLayout
          name="Email"
          placeholder="Enter your valid email address"
          onValueChange={emailValueChangeHandler}
          type="email"
          value={email}
        />
        <InputLayout
          name="Full Name"
          placeholder="Your name as seen by others "
          onValueChange={nameValueChangeHandler}
          type="text"
          value={name}
        />
        <InputLayout
          name="New Password"
          placeholder="Create an 8 characters password"
          onValueChange={passwordValueChangeHandler}
          type="password"
          value={password}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary text-2xl text-white py-2 rounded-2xl font-mono hover:-translate-y-1 hover:scale-[1.02] active:translate-y-1 active:scale-[.98] transition-all duration-700"
        >
          Signup
        </button>
        {/* <h1 className="text-center tracking-wide text-lg">
          Already have account{"  "}
          <span
            className="cursor-pointer text-red-500 tracking-wider  underline underline-offset-2"
            onClick={props.changeFormType}
          >
            login here
          </span>
        </h1> */}
      </form>
    </div>
  );
}
export default SignUpForm;

import React, { useState } from "react";
import InputLayout from "./InputLayout";
import { ToastContainer, toast } from "react-toastify";
function LoginForm(props) {
  function formSubmitHandlerLogin(event) {
    event.preventDefault();
    props.changeFormVisibility();
    const correctPassword = localStorage.getItem(email);
    if (correctPassword) {
      //   console.log(password.split(",")[0], password);
      if (correctPassword.split(",")[0] === password) {
        toast.success("Successfully loged in");
      } else {
        toast.warn("You have enetered incorrect password!");
      }
    } else {
      toast.error("User does not exist");
    }
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function emailValueChangeHandler(event) {
    setEmail(event.target.value);
  }
  function passwordValueChangeHandler(event) {
    // console.log("Event triggered");
    setPassword(event.target.value);
  }
  return (
    <div
      className="w-[95vw]  xsm:w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[50vw] max-h-[95vh] overflow-auto  rounded-lg bg-white px-6 py-8  flex flex-col gap-8"
      data-aos="fade-down"
    >
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-lg">
          🖐 Welcome back to <em className="font-semibold">Skyware</em> 🎉
        </h1>
        <h2 className="text-xl font-semibold">Let's sign in.</h2>
      </div>
      <form
        className="flex flex-col gap-8  w-full "
        onSubmit={formSubmitHandlerLogin}
      >
        <InputLayout
          name="Email"
          placeholder="Enter your valid email address"
          onValueChange={emailValueChangeHandler}
          type="email"
          value={email}
        />
        <InputLayout
          name="Password"
          placeholder="Enter your Password"
          onValueChange={passwordValueChangeHandler}
          type="password"
          value={password}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary text-2xl text-white py-2 rounded-2xl font-mono hover:-translate-y-1 hover:scale-[1.02] active:translate-y-1 active:scale-[.98] transition-all duration-700"
        >
          Login
        </button>
        <h1 className="text-center tracking-wide text-lg">
          Don't have account{"  "}
          <span
            className="cursor-pointer text-red-500 tracking-wider  underline underline-offset-2"
            onClick={props.changeFormType}
          >
            signup here
          </span>
        </h1>
      </form>
    </div>
  );
}
export default LoginForm;

import { InView } from "react-intersection-observer";
import contactUsImage from "../../Images/ContactFour.jpg";
import patternImage from "../../Images/PatternTwo.jpg";
import styled from "styled-components";
import InputLayout from "../Login/InputLayout";
function Contact(props) {
  const Background = styled.div`
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.6)
      ),
      url(${contactUsImage});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  const RightImageContact = styled.div`
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.2)
      ),
      url(${patternImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  `;
  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        console.log(inView, entry);
        props.onChangeLinkSet(inView ? "Contact Us" : "Home");
      }}
      id="Contact Us"
      //   className=""
    >
      <Background className="w-screen h-fit min-h-screen flex justify-center items-center flex-col py-24 ">
        {/* <div className="open-sans text-center text-[#eee] font-extrabold text-5xl uppercase tracking-wider mt-24 mb-12">
          Contact Us
        </div> */}
        <div className="w-[90%] max-w-5xl    flex  justify-evenly gap-10 overflow-hidden">
          <div className="w-[45%] opacity-100 flex justify-center flex-col items-center text-white gap-12">
            <div className="text-5xl mantser break-words leading-[1.3]">
              Ready to get Started your storage with precision?
            </div>
            <p className="text-xl">
              Contact us for a FREE consultation on how to get your storage with
              precison?.
            </p>
          </div>
          <div className="w-[45%]  py-8 bg-white rounded-sm">
            <form className=" flex gap-2 flex-col px-6">
              <div className="flex gap-5 w-full">
                <InputLayout
                  type="text"
                  placeholder="Enter you name"
                  name="First Name"
                  required
                />
                <InputLayout
                  type="text"
                  placeholder="Enter you name"
                  name="Last Name"
                  required
                />
              </div>

              <InputLayout
                type="email"
                placeholder="Enter you valid email address"
                name="Email"
                required
              />

              <div className="flex flex-col gap-5">
                <label className=" text-lg transition-all duration-1000 px-6 font-bold tracking-wider ">
                  Message
                </label>
                <textarea
                  className="w-full px-6 py-2   rounded-lg outline-none transition-all duration-500 shadow-xl   bg-[#b3c6d33b] placeholder:text-slate-500 placeholder:text-sm focus:shadow-2xl focus:scale-[1.02] placeholder:tracking-wider"
                  placeholder="Please share us anything that will help us to understand you"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-2xl text-white py-2 rounded-2xl font-mono hover:-translate-y-1 hover:scale-[1.02] active:translate-y-1 active:scale-[.98] transition-all duration-700 mt-4"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </Background>
    </InView>
  );
}

export default Contact;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import HeroSectionImage from "../../Images/HeroSectionImage.jpg";
import NavBar from "../NavBarPrimary/NavBar";
import HeroSectionTagLine from "./HeroSectionTagLine";
import TagsElement from "./TagsElement";
import TagsMain from "./TagsMain";
import DashboardImage from "../../Images/DashboardImage.png";
import { Link } from "react-router-dom";
function HeroSection() {
  const Background = styled.div`
    & .typed-cursor {
      color: black;
      margin-top: -20px;
    }
  `;

  // console.log(primaryNavBarStatus, "NavBar");
  return (
    <>
      <Background
        className="min-h-screen h-fit bg-purple-100  flex flex-col gap-12 lg:gap-20 justify-center
        font-mono pb-12 hero-section "
      >
        {/* Main content of hero section */}
        <div className="flex flex-col-reverse lg:flex-row  items-center  px-4 md:px-8 lg:px-12">
          <div className="flex gap-6 lg:gap-8 flex-col items-center justify-center w-full lg:w-3/5">
            <div>
              <HeroSectionTagLine />
            </div>

            <p className="text-black leading-loose tracking-wider  text-xl font-semibold break-words monster">
              With <TagsMain data="AI" color="#e86e2c"></TagsMain> and{" "}
              <TagsMain data="IoT" color="#e86e2c" />:
              <TagsElement data="Predict Shelf-life" color="seagreen" />,
              <TagsElement data="detect spoilage" color="#2b5ced" />,
              <TagsElement data=" Identify health status " color="slate" />
              and get the best{" "}
              <TagsElement data="scientific treatment " color="#db5d58" />
              possible for grains stored in your{" "}
              <TagsElement data="agri-warehouses." color="orange" />
            </p>
            <a href="#navbarsecondary">
              <button className="shadow-xl bg-slate-100 text-2xl  px-6 py-3 rounded-3xl  transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl active:shadow-lg active:scale-95 active:translate-y-1  ">
                Learn More
              </button>
            </a>
          </div>
          <div className=" w-full lg:w-2/5">
            <img src={DashboardImage} className=""></img>
          </div>
        </div>
      </Background>
    </>
  );
}
export default HeroSection;

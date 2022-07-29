import React from "react";
import AuthPageState from "../../Contexts/Auth/authPageState";
import { graphics } from "../../utils/graphics";
import { icons } from "../../utils/icons";
import StrataliteL from "../../assets/images/stratalite_large.png";
import StrataliteS from "../../assets/images/sidebar-logo.png";
import PersonalInformation from "./sections/PersonalInformation";

const Onboarding = () => {
  return (
    <AuthPageState>
      <div className="flex h-screen w-screen relative">
        <div className="absolute w-[40vw] right-[-3vw] bottom-0 z-[1] text-gray-600">
          {graphics.Auth.background}
        </div>
        <div className="absolute w-[75vw] right-[12vw] bottom-0 z-[2] text-gray-600">
          {graphics.Auth.background}
        </div>
        <div className="absolute w-[95vw] right-[50vw] bottom-0 z-[-2] text-gray-600">
          {graphics.Auth.background}
        </div>

        <div className="hidden w-[30%] bg-[#192434] md:flex items-center justify-center absolute z-[-3] h-full">
          <div className="w-80 flex flex-col items-center justify-center">
            <img src={StrataliteL} className="w-40" />
            <div className="text-white text-28 my-6 text-center tracking-wider">
              <span className="font-bold">Strata</span>
              <span className="font-light">lite</span>
            </div>
            <div className="text-center text-slate-300 font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sed esse vitae in, non unde odio explicabo iste placeat dolore
              architecto laudantium doloribus fugiat quas, fugit est, ratione
              molestias ullam.
            </div>

            <div className="text-white absolute bottom-0 left-0 m-12">
              © 2022 Stratalite
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] h-full my-auto absolute md:left-[30%] py-32 bg-white">
          <div className="absolute md:hidden top-0 left-0">
            <img src={StrataliteS} className="w-32" />
          </div>
          <div className="absolute top-0 right-0 m-8 font-normal flex items-center justify-between">
            English(UK)
            <span className="ml-3">{icons.Auth.dropdown}</span>
          </div>

          {/* main body */}
          <div>
            <div className="md:mx-20 px-6 absolute z-[5]">
              <div className="font-semibold text-28 my-6">
                Welcome to Stratalite
              </div>
              <div className="font-semibold text-gray-200 my-6 text-sm">
                Let's begin by entering your personal information
              </div>
              {/* arrow */}
              <div className="w-[60vw] flex text-white">
                <div
                  className="w-[40%] bg-sky-400 py-6 px-16"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 75% 0%, 85% 50%, 75% 100%, 0% 100%)",
                  }}
                >
                  Personal Information
                </div>
                <div
                  className="w-[40%] bg-sky-300 py-6 relative right-24 px-24"
                  style={{
                    clipPath:
                      "polygon(75% 0%, 85% 50%, 75% 100%, 0% 100%, 10% 50%, 0% 0%)",
                  }}
                >
                  Your Address
                </div>
                <div
                  className="w-[40%] bg-white py-6 relative right-48 text-black px-20 shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
                  style={{
                    clipPath:
                      "polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 10% 50%, 0% 0%)",
                  }}
                >
                  Company Information
                </div>
              </div>
            </div>

            <div className="relative top-56 left-28">
              <PersonalInformation />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 m-8 flex items-center font-normal">
            <div>Legal</div>
            <div className="ml-6">Privacy</div>
          </div>
        </div>
      </div>
    </AuthPageState>
  );
};

export default Onboarding;

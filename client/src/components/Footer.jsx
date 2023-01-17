import React from "react";

import logo from "../../images/logo.png";



const Footer = () => {
  
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 pt-20 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32 -ml-20" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 -ml-10 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">Support</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Help</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Contact Me</p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Feel Free to Connect Me. <br/> It's 🅟🅑🅙 and I'm available for 24/7 to Support You.</p>
        <p className="text-white text-sm text-center font-medium mt-2">connect.pbj@vircur.com</p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@vircur2022</p>
        <p className="text-white text-right text-xs">All Rights Reserved by VIRCUR®.</p>
      </div>
    </div>
  );
}


export default Footer;
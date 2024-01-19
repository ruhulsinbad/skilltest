import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" bg-black flex justify-between bg-opacity-85 py-32 px-40">
        <div className=" flex flex-col ">
          <h1 className=" font-raleway text-2xl text-white">
            Subscribe to our newsletter
          </h1>
          <input className=" mt-4 w-full py-3 px-4" type="email" /> <br />
          <button
            className=" w-fit py-2 px-6 text-lg font-inter bg-white"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className=" text-white">
          <h1 className=" text-2xl font-raleway"> Quick Links </h1>
          <ul className=" flex flex-col gap-3 mt-6">
            <li> About </li>
            <li> Refund Policy </li>
            <li> Become a distributor </li>
          </ul>
        </div>

        <div className=" text-white">
          <h1 className=" text-2xl font-raleway mb-4"> Follow Us </h1>
          <Facebook /> <Instagram /> <LinkedIn />
        </div>
      </div>

      <div className=" py-4 text-center font-inter">
        Copyright &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;

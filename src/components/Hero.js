import React from "react";

const Hero = () => {
  return (
    <div className=" relative overflow-hidden flex justify-center bg-black bg-opacity-90">
      <div className=" text- flex flex-col justify-center gap-6 ">
        <h1 className=" text-6xl text-white font-extrabold font-lexend opacity-90">
          {" "}
          Flash Deal!{" "}
        </h1>
        <p className=" text-3xl font-ubuntu text-gray-200">
          Caputure your beautiful moments
        </p>
        <button className=" opacity-90 bg-gray-100 w-fit  py-2 px-6 rounded-md font-ubuntu">
          Buy Now
        </button>
      </div>
      <img
        className=" w-[600px] object-cover "
        src="camera.png"
        alt="logo 
      "
      ></img>

      {/* <div className=" absolute bottom-32 flex flex-col -right-40 gap-6 opacity-85 ">
        <div className=" text-end rotate-45 rounded-full w-96 h-12 shadow-md bg-gradient-to-b from-pink-800 via-red-600 to-orange-600"></div>
        <div className=" text-end rotate-45 rounded-full w-96 h-12 shadow-md bg-gradient-to-b from-pink-800 via-red-600 to-orange-600"></div>
        <div className=" text-end rotate-45 rounded-full w-96 h-12 shadow-md bg-gradient-to-b from-pink-800 via-red-600 to-orange-600"></div>
      </div>

      <div className=" absolute left-12 w-1 h-full rounded-full bottom-0 opacity-60  bg-gradient-to-b from-pink-700 via-red-700 to-orange-700"></div>
      <div className=" absolute grid place-items-center text-white font-lexend w-28 h-28 bg-gradient-to-tr from-pink-700 via-red-700 to-orange-700 rounded-full -left-2 bottom-0 ">
        See All
      </div> */}
      <img
        className=" absolute opacity-5 w-full h-full object-cover"
        src="19742.jpg"
        alt="back"
      />

      {/* <p> Caputure your beautiful moments</p> */}
    </div>
  );
};

export default Hero;

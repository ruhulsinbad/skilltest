import React from "react";

const Categories = () => {
  return (
    <div className=" my-20">
      <h1 className=" text-4xl font-bold font-raleway text-center ">
        {" "}
        Collections
      </h1>
      <div className=" px-32 gap-32 flex justify-center mt-20 ">
        <div className=" w-full flex  flex-col items-center justify-center bg-gray-200 rounded-lg py-20 relative bg-opacity-80 ">
          <img className=" w-72 h-72" src="camera.png" alt="camera" />
          <p className=" text-2xl font-bold font-raleway opacity-90 ">
            {" "}
            Digital Camera{" "}
          </p>
          <img
            className="absolute top-0 object-cover w-full h-ful opacity-90 -z-10"
            src="abs.jpg"
            alt="product"
          />
        </div>
        <div className=" w-full flex  flex-col items-center justify-center bg-gray-200 rounded-lg py-20 relative bg-opacity-80 ">
          <img className=" w-72 h-72" src="camera.png" alt="camera" />
          <p className=" text-2xl font-bold font-raleway opacity-90 ">
            {" "}
            Digital Camera{" "}
          </p>
          <img
            className=" absolute top-0 object-cover w-full h-ful opacity-90  -z-10"
            src="abs.jpg"
            alt="product"
          />
        </div>
        <div className=" w-full flex  flex-col items-center justify-center bg-gray-200 rounded-lg py-20 relative bg-opacity-80 ">
          <img className=" w-72 h-72" src="camera.png" alt="camera" />
          <p className=" text-2xl font-bold font-raleway opacity-90 ">
            {" "}
            Digital Camera{" "}
          </p>
          <img
            className=" absolute top-0 object-cover w-full h-ful opacity-90  -z-10"
            src="abs.jpg"
            alt="product"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;

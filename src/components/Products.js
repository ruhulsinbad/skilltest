import React from "react";

const Products = () => {
  return (
    <div className=" py-20">
      <h1 className=" text-4xl font-bold font-raleway text-center ">
        Feature Products
      </h1>
      <div className="flex justify-between px-40 gap-20 mt-20">
        <div className="  ">
          <div className="bg-slate-100 relative bg-opacity-95 py-4">
            <div className=" w-fit font-ubuntu  ml-4 bg-red-600 opacity-90 rounded-full py-2 px-6 text-white ">
              new
            </div>
            <img src="camera.png" alt="camera" />
            <img
              className=" absolute top-0 object-cover w-full h-ful opacity-90  -z-10"
              src="14204.jpg"
              alt="product"
            />
          </div>
          <div className=" px-4 py-4">
            <h1 className=" font-semibold font-lexend text-xl opacity-90">
              Canon EOS 90D
            </h1>
            <p className=" font-raleway text-gray-700">
              {" "}
              from <span className=" font-semibold">$999</span>{" "}
            </p>
          </div>
        </div>
        <div className="  ">
          <div className="bg-slate-100 relative bg-opacity-95 py-4">
            <div className=" w-fit font-ubuntu  ml-4 bg-red-600 opacity-90 rounded-full py-2 px-6 text-white ">
              new
            </div>
            <img src="camera.png" alt="camera" />
            <img
              className=" absolute top-0 object-cover w-full h-ful opacity-90  -z-10"
              src="14204.jpg"
              alt="product"
            />
          </div>
          <div className=" px-4 py-4">
            <h1 className=" font-semibold font-lexend text-xl opacity-90">
              Canon EOS 90D
            </h1>
            <p className=" font-raleway text-gray-700">
              {" "}
              from <span className=" font-semibold">$999</span>{" "}
            </p>
          </div>
        </div>
        <div className="  ">
          <div className="bg-slate-100 relative bg-opacity-95 py-4">
            <div className=" w-fit font-ubuntu  ml-4 bg-red-600 opacity-90 rounded-full py-2 px-6 text-white ">
              new
            </div>
            <img src="camera.png" alt="camera" />
            <img
              className=" absolute top-0 object-cover w-full h-ful opacity-90  -z-10"
              src="14204.jpg"
              alt="product"
            />
          </div>
          <div className=" px-4 py-4">
            <h1 className=" font-semibold font-lexend text-xl opacity-90">
              Canon EOS 90D
            </h1>
            <p className=" font-raleway text-gray-700">
              {" "}
              from <span className=" font-semibold">$999</span>{" "}
            </p>
          </div>
        </div>

        <div className=" ">
          <div className=" relative bg-opacity-95 bg-slate-100 py-4">
            <div className=" w-fit font-ubuntu  ml-4 bg-red-600 opacity-90 rounded-full py-2 px-6 text-white ">
              new
            </div>
            <img src="camera.png" alt="camera" />
            <img
              className=" absolute top-0 object-cover w-full h-ful opacity-90  -z-10"
              src="14204.jpg"
              alt="product"
            />
          </div>
          <div className=" px-4 py-4">
            <h1 className=" font-semibold font-lexend text-xl opacity-90">
              Canon EOS 90D
            </h1>
            <p className=" font-raleway text-gray-700">
              {" "}
              from <span className=" font-semibold">$999</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

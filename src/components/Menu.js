import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Menu = () => {
  return (
    <div className=" py-6 flex  px-40 bg-gray-200">
      <h1 className=" font-lexend text-gray-700 font-semibold text-3xl">
        {" "}
        Camera{" "}
      </h1>
      <ul className="   w-full text-lg text-gray-800 flex font-raleway justify-end  items-center gap-8 ">
        <li className=" menu  "> Home </li>
        <li className=" menu "> Category </li>
        <li className=" menu"> About</li>
        <li className="menu"> Contact </li>
      </ul>

      <ul className=" w-full text-lg flex font-lexend font justify-end items-center gap-8 ">
        <li>
          {" "}
          <AddShoppingCartIcon />{" "}
        </li>
        <li> Login/Register </li>
      </ul>
    </div>
  );
};

export default Menu;

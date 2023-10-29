import React, { useState } from "react";
import Logo from "../img/logo.svg";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div>
      {/* For Desk */}
      <div className="hidden md:flex justify-between">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="w-10 bg-bgBlack rounded-full p-2"
          />
          <p className=" text-2xl font-medium">HyperHackers</p>
        </div>
        <div>
          <ul className=" flex gap-16 ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Take Loan</li>
            <li className="cursor-pointer">Repay Loan</li>
            <li className="cursor-pointer">Liquidate NFT </li>
          </ul>
        </div>
        <div className="flex items-center px-7 rounded-full bg-bgBlack">
          <p>😊</p>
        </div>
      </div>

      {/* For Mobile */}
      <div className="flex justify-between md:hidden">
        <div className=" flex gap-2 items-center">
          <img
            src={Logo}
            alt="logo"
            className="w-7 bg-bgBlack rounded-full p-1"
          />{" "}
          <p className="text-xl font-medium">HyperHackers</p>
        </div>
        <div className=" relative">
          <BiMenuAltRight className="text-2xl" onClick={handleMenu} />
          {isMenu && (
            <div className="absolute top-8 right-1  min-w-min bg-txtColor text-bgBlue rounded-lg">
              <ul className=" flex flex-col justify-center items-center min-w-[150px]" >
                <li className="cursor-pointer p-1 w-full text-center">Home</li>
                <li className="cursor-pointer p-1 w-full text-center">Take Loan</li>
                <li className="cursor-pointer p-1 w-full text-center">Repay Loan</li>
                <li className="cursor-pointer p-1 w-full text-center">Liquidate NFT </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

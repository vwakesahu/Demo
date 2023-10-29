import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const GridView = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:gap-8  md:grid-cols-2">
        <div>
          <p className=" md:text-8xl text-3xl font-bold ">
            Earn some credits by giving your NFT to{" "}
            <span className=" md:text-bgBlack md:underline">rent</span>
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center text-xl">
          <p className=" mt-5 md:text-2xl">
            We know, you want to explore more!{" "}
            <button className="mt-3 md:mt-0 md:flex bg-bgLightGreen px-14 rounded-full text-bgBlack py-3 w-full md:w-auto relative">
              Get Started
              <div className="md:flex hidden absolute bg-txtColor p-4 rounded-full -right-5 top-0"><BsArrowUpRight /></div>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridView;

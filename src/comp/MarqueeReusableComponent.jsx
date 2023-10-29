import React from "react";

const MarqueeReusableComponent = ({ bgColor, txt, txtColor }) => {
  return (
    <div className="flex">
      <div
        className={`text-${txtColor} bg-${bgColor} md:px-24 md:py-4 px-3 py-1 rounded-full`}
      >
        {txt}
      </div>
    </div>
  );
};

export default MarqueeReusableComponent;

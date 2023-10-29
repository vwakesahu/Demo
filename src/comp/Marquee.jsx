import React from "react";
import MarqueeReusableComponent from "./MarqueeReusableComponent";

const Marquee = () => {
  return (
    <div className="">
      <div className="mt-9 flex pb-6 justify-center md:text-2xl">
        <MarqueeReusableComponent
          bgColor={"txtColor"}
          txtColor={"bgBlack"}
          txt={"Polkadot "}
        />
        <MarqueeReusableComponent
          bgColor={"bgLightOrange"}
          txtColor={"txtColor"}
          txt={"Sepolia"}
        />
        <MarqueeReusableComponent
          bgColor={"bgLightYellow"}
          txtColor={"txtColor"}
          txt={"Cardano "}
        />
        <MarqueeReusableComponent
          bgColor={"bgLightGreen"}
          txtColor={"txtColor"}
          txt={"Ethereum "}
        />
        <MarqueeReusableComponent
          bgColor={"bgBlack"}
          txtColor={"txtColor"}
          txt={"Bitcoin"}
        />
        <MarqueeReusableComponent
          bgColor={"txtColor"}
          txtColor={"bgBlack"}
          txt={"Litecoin "}
        />{" "}
        <MarqueeReusableComponent
          bgColor={"bgLightGreen"}
          txtColor={"txtColor"}
          txt={"Ethereum "}
        />
      </div>
      <div className="flex pb-6 justify-center md:text-2xl -mt-5 md:-mt-2">
        <MarqueeReusableComponent
          bgColor={"bgBlack"}
          txtColor={"txtColor"}
          txt={"Bitcoin"}
        />
        <MarqueeReusableComponent
          bgColor={"txtColor"}
          txtColor={"bgBlack"}
          txt={"Litecoin "}
        />
        <MarqueeReusableComponent
          bgColor={"bgLightGreen"}
          txtColor={"txtColor"}
          txt={"Ethereum "}
        />
        <MarqueeReusableComponent
          bgColor={"bgLightYellow"}
          txtColor={"txtColor"}
          txt={"Cardano "}
        />
        <MarqueeReusableComponent
          bgColor={"bgLightOrange"}
          txtColor={"txtColor"}
          txt={"Sepolia"}
        />
        <MarqueeReusableComponent
          bgColor={"txtColor"}
          txtColor={"bgBlack"}
          txt={"Polkadot "}
        />
        <MarqueeReusableComponent
          bgColor={"bgLightGreen"}
          txtColor={"txtColor"}
          txt={"Ethereum "}
        />
        <MarqueeReusableComponent
          bgColor={"bgBlack"}
          txtColor={"txtColor"}
          txt={"Bitcoin"}
        />

        {/* <MarqueeReusableComponent bgColor={'txtColor'} txtColor={'bgBlack'} txt={'Solana '} />
        <MarqueeReusableComponent bgColor={'txtColor'} txtColor={'bgBlack'} txt={'Tezos '} />
        <MarqueeReusableComponent bgColor={'txtColor'} txtColor={'bgBlack'} txt={'Chainlink '} />
        <MarqueeReusableComponent bgColor={'txtColor'} txtColor={'bgBlack'} txt={'Stellar '} />
        <MarqueeReusableComponent bgColor={'txtColor'} txtColor={'bgBlack'} txt={'Avalanche '} />
        <MarqueeReusableComponent bgColor={'txtColor'} txtColor={'bgBlack'} txt={'Cosmos '} />
        <MarqueeReusableComponent bgColor={'txtColor'} txtColor={'bgBlack'} txt={'Algorand '} /> */}
      </div>
      <div className="flex pb-6 justify-center md:text-2xl -mt-5 md:-mt-2">
        <MarqueeReusableComponent
          bgColor={"txtColor"}
          txtColor={"bgBlack"}
          txt={"Polkadot "}
        />
        <MarqueeReusableComponent
          bgColor={"bgLightOrange"}
          txtColor={"txtColor"}
          txt={"Sepolia"}
        />
        <MarqueeReusableComponent
          bgColor={"bgLightYellow"}
          txtColor={"txtColor"}
          txt={"Cardano "}
        />
        <MarqueeReusableComponent
          bgColor={"bgLightGreen"}
          txtColor={"txtColor"}
          txt={"Ethereum "}
        />
        <MarqueeReusableComponent
          bgColor={"bgBlack"}
          txtColor={"txtColor"}
          txt={"Bitcoin"}
        />
        <MarqueeReusableComponent
          bgColor={"txtColor"}
          txtColor={"bgBlack"}
          txt={"Litecoin "}
        />{" "}
        <MarqueeReusableComponent
          bgColor={"bgLightGreen"}
          txtColor={"txtColor"}
          txt={"Ethereum "}
        />
      </div>
   
    </div>
  );
};

export default Marquee;

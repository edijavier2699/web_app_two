import React from 'react';
import '../styles/heroSection.css';
import { DemoModal } from './demoModal';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative my-5 overflow-hidden heroVideoBackground">
      <div className="relative z-10 flex flex-col h-full text-center text-white px-4 sm:px-6 md:px-[60px]">
        {/* Wrapper for text content */}
        <div className="w-full flex flex-col text-black">
          <div className="flex flex-col lg:items-start text-left lg:px-0 lg:py-8 rounded">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold sm:mb-3 pt-[35px]">
              Invest in Commercial Real Estate.
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-[55px] font-bold mb-3">
              <span>Tomorrow's Real Estate.  Today.</span>
              {/* <span className="block sm:inline">Secure.</span>
              <span className="block sm:inline">Simple.</span>
              <span className="block sm:inline">Swift.</span> */}
            </h1>
            <p className="text-[#667085] text-lg mb-[50px] sm:w-[450px]">
              Connecting asset owners and accredited investors on a seamless platform. Start building your commercial real estate portfolio <span className="text-[#C8E870] font-bold">with as little as £1,000.</span>
            </p>
            <DemoModal />
          </div>

          <div className="bg-white text-black flex flex-col sm:flex-row justify-between mb-[25px]  rounded py-[40px] px-[100px] space-y-5 sm:space-y-0 shadow-lg">
    <article className="w-full sm:w-1/3 flex flex-col items-center space-y-3 border-b sm:border-0 sm:border-r pb-5 sm:pb-0">
        <h1 className="text-[#C8E870] sm:text-4xl text-5xl text-center font-bold">£1,000</h1>
        <p className="text-[#667085]">Minimum Amount</p>
    </article>
    <article className="w-full sm:w-1/3 flex flex-col items-center space-y-3 border-b sm:border-0 sm:border-r pb-5 sm:pb-0">
        <h1 className="text-[#C8E870] sm:text-4xl text-5xl font-bold">Instant</h1>
        <p className="text-[#667085]">Liquidity</p>
    </article>
    <article className="w-full sm:w-1/3 flex flex-col items-center space-y-3 border-b sm:border-0 pb-5 sm:pb-0">
        <h1 className="text-[#C8E870] sm:text-4xl text-5xl font-bold">0.5%</h1>
        <p className="text-[#667085]">Fees</p>
    </article>
</div>

        </div>
      </div>
    </div>
  );
};

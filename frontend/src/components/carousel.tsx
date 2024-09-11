import { Carousel } from 'flowbite-react';
import "../styles/carousel.css";
import check from "../assets/check.svg"
import error from "../assets/error.svg"
import miniLogo from "../assets/miniLogo.svg"

export const MyCarousel = () => {
  return (
    <div className="w-full  h-[200px] max-w-3xl px-[20px] mt-6" id="mycarousel">
      <Carousel
        indicators={true}  // Show indicators for slides
        slide={false}
        className="custom-landing-carousel"
      >
        {/* Slide 1 - Text Content */}
        <div className="flex flex-col items- justify-center w-full px-2 border-[0.1px] border-[#344054]  text-white rounded-lg p-3 ">
          <p className="mb-4 text-sm">Property Appreciation</p>
          <ul className=" space-y-2 text-xs">
            <li className="flex justify-between bg-[#EBFABE] rounded-lg text-sm font-semibold px-3 py-1 text-black"> <img alt="miniLogo-svg" src={miniLogo}/> <img alt="check-svg" src={check} /></li>
            <li className="flex justify-between  px-3">Traditional Real Estate Funds <img alt="check-svg" src={check} /></li>

            <hr className="border-[0.5px] border-[#344054]" />

            <li className="flex justify-between  px-3">REITs <img alt="check-svg" src={check} /></li>
          </ul>
        </div>

        {/* Slide 2 - Button and Info */}
        <div className="flex flex-col items- justify-center w-full px-2 border-[0.1px] border-[#344054]  text-white rounded-lg p-3 ">
          <p className="mb-4 text-sm">Passive Income</p>
          <ul className=" space-y-2 text-xs">
          <li className="flex justify-between bg-[#EBFABE] rounded-lg text-sm font-semibold px-3 py-1 text-black"> <img alt="miniLogo-svg" src={miniLogo}/> <img alt="check-svg" src={check} /></li>
            <li className="flex justify-between  px-3">Traditional Real Estate Funds <img alt="check-svg" src={check} /></li>
            <hr className="border-[0.5px] border-[#344054]" />
            <li className="flex justify-between  px-3">REITs <img alt="check-svg" src={check} /></li>
          </ul>
        </div>

        {/* Slide 3 - Image Background with Text */}
        <div className="flex flex-col items- justify-center w-full px-2 border-[0.1px] border-[#344054]  text-white rounded-lg p-3 ">
          <p className="mb-4 text-sm">Fees</p>
          <ul className=" space-y-2 text-xs">
          <li className="flex justify-between bg-[#EBFABE] rounded-lg text-sm font-semibold px-3 py-1 text-black"> <img alt="check-svg" src={miniLogo}/> <span>0.5%</span></li>
            <li className="flex justify-between  px-3">Traditional Real Estate Funds <span  className=" text-right">2% management ,20% performance</span></li>
            <hr className="border-[0.5px] border-[#344054]" />
            <li className="flex justify-between  px-3">REITs <span>0.5 - 3% management</span></li>
          </ul>
        </div>

        {/* Slide 4 - Mixed Content */}
        <div className="flex flex-col items- justify-center w-full px-2 border-[0.1px] border-[#344054]  text-white rounded-lg p-3 ">
          <p className="mb-4 text-sm">Minimum Entry</p>
          <ul className=" space-y-2 text-xs">
          <li className="flex justify-between bg-[#EBFABE] rounded-lg text-sm font-semibold px-3 py-1 text-black"> <img alt="check-svg" src={miniLogo}/> <img alt="check-svg" src={check} /></li>
            <li className="flex justify-between  px-3">Traditional Real Estate Funds <span>+ £50K</span></li>
            <hr className="border-[0.5px] border-[#344054]" />
            <li className="flex justify-between  px-3">REITs <span>£1K - £2K</span></li>
          </ul>
        </div>

        {/* Slide 5 - Custom HTML */}
        <div className="flex flex-col items- justify-center w-full px-2 border-[0.1px] border-[#344054]  text-white rounded-lg p-3 ">
          <p className="mb-4 text-sm">Instant Liquidity</p>
          <ul className=" space-y-2 text-xs">
          <li className="flex justify-between bg-[#EBFABE] rounded-lg text-sm font-semibold px-3 py-1 text-black"> <img alt="check-svg" src={miniLogo}/> <img alt="check-svg" src={check} /></li>
            <li className="flex justify-between  px-3">Traditional Real Estate Funds <img alt="check-svg" src={error} /></li>
            <hr className="border-[0.5px] border-[#344054]" />
            <li className="flex justify-between  px-3">REITs <img alt="check-svg" src={check} /></li>
          </ul>
        </div>

        {/* Slide 6 - Another Custom Slide */}
        <div className="flex flex-col items- justify-center w-full px-2 border-[0.1px] border-[#344054]  text-white rounded-lg p-3 ">
          <p className="mb-4 text-sm">Control Over Investments</p>
          <ul className=" space-y-2 text-xs">
          <li className="flex justify-between bg-[#EBFABE] rounded-lg text-sm font-semibold px-3 py-1 text-black"> <img alt="check-svg" src={miniLogo}/> <img alt="check-svg" src={check} /></li>
            <li className="flex justify-between  px-3">Traditional Real Estate Funds <img alt="check-svg" src={error} /></li>
            <hr className="border-[0.5px] border-[#344054]" />
            <li className="flex justify-between  px-3">REITs <img alt="check-svg" src={error} /></li>
          </ul>
        </div>

        {/* Slide 7 - Final Call to Action */}
        <div className="flex flex-col items- justify-center w-full px-2 border-[0.1px] border-[#344054]  text-white rounded-lg p-3 ">
          <p className="mb-4 text-sm">24/7 Trading</p>
          <ul className=" space-y-2 text-xs">
          <li className="flex justify-between bg-[#EBFABE] rounded-lg text-sm font-semibold px-3 py-1 text-black"> <img alt="check-svg" src={miniLogo}/> <img alt="check-svg" src={check} /></li>
            <li className="flex justify-between  px-3">Traditional Real Estate Funds <img alt="check-svg" src={error} /></li>
            <hr className="border-[0.5px] border-[#344054]" />
            <li className="flex justify-between px-3">REITs <img alt="check-svg" src={error} /></li>
          </ul>
        </div>
      </Carousel>
    </div>
  );
};

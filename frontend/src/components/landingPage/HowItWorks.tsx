import howitworks from "../../assets/tokunize.jpg";
import { FaCheck } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 80px)" }}
      className="mx-auto items-center flex justify-center px-10 py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Text Section */}
        <div className="space-y-5 mb-7 md:mb-0">
          <h2 className="text-3xl text-[#A0CC29] font-bold ">HOW TOKUNIZE WORKS</h2>
          <h2 className="text-5xl text-[#334054]">
            Tokunize uses technology to shrink the distance between homeowners and institutional investors.
          </h2>
          
          {/* Adding the Low Cost, Large Scale, and Radically Transparent */}
          <div className="space-y-4 ml-5 pt-10">
            <div className="flex items-center space-x-3">
              <FaCheck className="text-[#C8E870] text-3xl" /> {/* Checkmark Icon */}
              <span className="text-lg text-[#334054] font-medium">LOW COST</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheck className="text-[#C8E870] text-3xl"/>
              <span className="text-lg text-[#334054] font-medium">LARGE SCALE</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaCheck className="text-[#C8E870] text-3xl" />
              <span className="text-lg text-[#334054] font-medium">RADICALLY TRANSPARENT</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={howitworks}
            alt="Tokunize"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

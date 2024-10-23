import React, { useState } from "react";
import smallLogo from "../assets/logo_only_black.png";
import { RiInformation2Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { LineChartMarketplace } from "./lineChartMarketplace";

interface MarketplaceCardProps {
    title: string;
    image: string;
    description: string;
    propertyType: string;
    propertyPrice: string;
    investmentCategory: string;
    returnAmount: string;
    index:number
}

export const MarketplaceCard: React.FC<MarketplaceCardProps> = ({
  title,
  image,
  description,
  propertyType,
  propertyPrice,
  investmentCategory,
  returnAmount,
  index
}) => {
  // State to control if the information overlay is active
  const [showInfo, setShowInfo] = useState(false);

  // Toggle the state when the info button is clicked
  const toggleInfo = () => {
    setShowInfo(prevState => !prevState);
  };

  // Dictionary for investment categories and their corresponding values
  const investmentData: { [key: string]: { risk: string; income: string; capitalGrowth: string; return: string } } = {
    Core: {
      risk: "Low",
      income: "High",
      capitalGrowth: "Low",
      return: "Medium-High"
    },
    Opportunistic: {
      risk: "High",
      income: "None",
      capitalGrowth: "High",
      return: "High"
    },
  };

  // Fallback values in case the investmentCategory is not found
  const currentData = investmentData[investmentCategory] || {
    risk: "Low",
    income: "High",
    capitalGrowth: "Low",
    return: "High"
  };

  return (
    <article
      style={{ borderWidth: "0.1px" }}
      className="relative flex flex-col h-full border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white overflow-hidden"
    >
      <div className="relative w-full h-60 px-6 pt-6">
        <img src={image} alt={`${title}`} className="object-cover w-full h-full rounded-lg" />
        <div className="absolute top-8 left-8 bg-[#C8E870] rounded-lg px-2 py-1 text-xs font-semibold">
          {propertyType}
        </div>
      </div>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col justify-center">
            <p className="text-sm">{investmentCategory}</p>
            <h2 className=" text-xl md:text-lg xl:text-xl font-semibold text-gray-800">{title}</h2>
          </div>
          <span className="text-sm bg-[#C8E869] p-2 rounded-lg">{returnAmount}% IRR</span>
        </div>

        <p className="text-gray-500 ">{description}</p>
      </div>

      <div className="pb-6 mt-1 flex justify-between items-center px-6">
        <div className="flex items-center space-x-3">
          <img src={smallLogo} alt="tokunize-small-logo" className="h-8 w-8 object-cover rounded-full" />
          <div className="text-gray-800">
            <p className="text-xs text-gray-500">London, UK</p>
            <p className="font-semibold text-gray-500 text-xs">£ {propertyPrice}</p>
          </div>
        </div>

        <div onClick={toggleInfo} className="p-3 rounded-full cursor-pointer">
          <RiInformation2Fill className="text-black text-4xl text-[#C8E869] hover:text-[#A0CC28] duration-300" />
        </div>
      </div>

      {/* Overlay div that appears when showInfo is true */}
      <div
        className={`absolute inset-0 bg-white shadow-xl rounded-lg p-8 transition-transform duration-500 ease-in-out transform ${
          showInfo ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Título */}
        <span className="flex justify-between items-center border-b pb-3 mb-5">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <IoMdCloseCircle className="cursor-pointer text-2xl "  onClick={toggleInfo}/>
        </span>
      
        {/* Tabla para la información */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-600 text-sm font-semibold">Category</th>
                <th className="px-4 py-2 text-left text-gray-600 text-sm font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-1 text-gray-700 text-sm font-medium">Risk</td>
                <td className="px-4 py-1 text-sm font-medium">{currentData.risk}</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-1 text-gray-700 text-sm font-medium">Income</td>
                <td className="px-4 py-1 text-sm font-medium">{currentData.income}</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-1 text-gray-700 text-sm font-medium">Capital Growth</td>
                <td className="px-4 py-1 text-sm font-medium">{currentData.capitalGrowth}</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-1 text-gray-700 text-sm font-medium">Return</td>
                <td className="px-4 py-1 text-sm font-medium">{currentData.return}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <LineChartMarketplace index={index} /> 
      </div>
    </article>
  );
};



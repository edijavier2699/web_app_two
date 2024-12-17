import { IoDocumentsOutline } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";
import { PiNewspaperFill } from "react-icons/pi";
import { FaChartBar } from "react-icons/fa";
import { RiExchangeFill } from "react-icons/ri";


interface FeaturesCardProps {
    icon: "Feature1" | "Feature2" | "Feature3" | "Feature4" | "ChartBar";
    title: string;
    description: string;
    secondTitle?: string;
}

const iconMap: Record<FeaturesCardProps['icon'], JSX.Element> = {
    "Feature1":  <RiExchangeFill className="h-16 w-16 text-[#375B0A]"/>,
    "Feature2":  <FaChartPie className="h-16 w-16 text-[#375B0A]"/>,
    "Feature3": <IoDocumentsOutline className="h-16 w-16 text-[#375B0A]"/>,
    "Feature4": <PiNewspaperFill className="h-16 w-16 text-[#375B0A]"/>,
    "ChartBar": <FaChartBar className="h-16 w-16 text-[#375B0A]"/>,

};

export const FeaturesCard = ({ icon, title, description,secondTitle }: FeaturesCardProps) => {
    return (
        <article className="flex-1  bg-white mb-5 sm:mb-0">
            <div className="flex items-center justify-center mb-4 bg-[#F4FAE2] p-1 rounded-lg w-20 h-20">
                {iconMap[icon]} 
            </div>
            <h3 className="text-3xl font-bold text-[#121212]">{title}</h3>
            <h3 className="text-3xl font-bold text-[#121212]">{secondTitle}</h3>
            <p className="s text-gray-500 mt-2">{description}</p>
        </article>
    );
};

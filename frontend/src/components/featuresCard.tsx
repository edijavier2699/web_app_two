import feature1 from "../assets/cashFlow.png";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";


interface FeaturesCardProps {
    icon: "Feature1" | "Feature2" | "Feature3";
    title: string;
    description: string;
}

const iconMap: Record<FeaturesCardProps['icon'], JSX.Element> = {
    "Feature1": <img src={feature1} alt="Feature 1" className="h-16 w-16" />,
    "Feature2":  <FaChartPie className="h-16 w-16 text-[#375B0A]"/>,
    "Feature3": <IoDocumentsOutline className="h-16 w-16 text-[#375B0A]"/>,
};

export const FeaturesCard = ({ icon, title, description }: FeaturesCardProps) => {
    return (
        <article className="flex-1  bg-white mb-5 sm:mb-0">
            <div className="flex items-center justify-center mb-4 bg-[#F4FAE2] p-1 rounded-lg w-20 h-20">
                {iconMap[icon]} 
            </div>
            <h3 className="text-3xl font-bold text-[#121212]">{title}</h3>
            <p className="s text-gray-500 mt-2">{description}</p>
        </article>
    );
};

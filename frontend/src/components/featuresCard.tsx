import feature1 from "../assets/feature_icon_1.svg";
import feature2 from "../assets/feature_icon_2.svg";
import feature3 from "../assets/feature_icon_3.svg";

interface FeaturesCardProps {
    icon: "Feature1" | "Feature2" | "Feature3";
    title: string;
    description: string;
}

const iconMap: Record<FeaturesCardProps['icon'], JSX.Element> = {
    "Feature1": <img src={feature1} alt="Feature 1" className="h-16 w-16" />,
    "Feature2": <img src={feature2} alt="Feature 2" className="h-16 w-16" />,
    "Feature3": <img src={feature3} alt="Feature 3" className="h-16 w-16" />,
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

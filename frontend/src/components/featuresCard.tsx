import React from "react";
import { GlobeAltIcon, ChartBarIcon, BoltIcon } from '@heroicons/react/24/outline'; 

interface FeaturesCardProps {
    icon: "Globe" | "Chart" | "Bolt";
    title: string;
    description: string;
}

const iconMap: Record<FeaturesCardProps['icon'], JSX.Element> = {
    "Globe": <GlobeAltIcon className="h-6 w-6 text-blue-500" />,
    "Chart": <ChartBarIcon className="h-6 w-6 text-green-500" />,
    "Bolt": <BoltIcon className="h-6 w-6 text-yellow-500" />,
};

export const FeaturesCard = ({ icon, title, description }: FeaturesCardProps) => {
    return (
        <article className="flex-1 rounded-lg bg-white">
            <div className="flex items-center justify-center mb-4 bg-[#F4FAE2] p-4 rounded-full w-14 h-14">
                {iconMap[icon]} 
            </div>
            <h2 className="text-3xl font-bold text-[#121212]">{title}</h2>
            <p className="text-gray-500 font-medium mt-2">{description}</p>
        </article>
    );
};


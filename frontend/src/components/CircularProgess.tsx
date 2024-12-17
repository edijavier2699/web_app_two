
interface CircularProgressProps {
    progress: number;
    index: number;
    isActive: boolean;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ progress, index, isActive }) => {
    const radius = 13;
    const strokeWidth = 4;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <svg width="40" height="40" className="relative">
                <circle
                    cx="20"
                    cy="20"
                    r={radius}
                    stroke="#577B14"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    cx="20"
                    cy="20"
                    r={radius}
                    stroke="#C8E870"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={isActive ? offset : circumference}
                    style={{ transition: "stroke-dashoffset 0.3s ease" }}
                />
                <text
                    x="20"
                    y="26"
                    textAnchor="middle"
                    fontSize="17px"
                    fontWeight="bold"
                    fill={isActive ? "#000" : "#777"}
                >
                    {index + 1}
                </text>
            </svg>
        </div>
    );
};


export default CircularProgress
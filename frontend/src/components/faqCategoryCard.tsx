import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface FaqCategoryCardProps {
    title: string;
    description: string;
    onClick: () => void; // Prop para manejar el clic
}

export const FaqCategoryCard: React.FC<FaqCategoryCardProps> = ({ title, description, onClick }) => {
    return (
        <Card className="cursor-pointer bg-[#1C2939] text-white hover:bg-[#C8E870] duration-300" onClick={onClick}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-white">{description}</CardDescription>
            </CardHeader>
        </Card>
    );
};


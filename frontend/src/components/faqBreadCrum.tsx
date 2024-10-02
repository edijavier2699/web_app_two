import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useNavigate } from "react-router-dom";

export const FaqBreadCrum: React.FC<{ currentCategory: string; selectedTitle: string | null }> = ({ currentCategory, selectedTitle }) => {
    const navigate = useNavigate();

    const handleBackToHelpCenter = () => {
        navigate("/faq/"); // Ensure this is the correct route for your FAQ page
    };

    return (
        <Breadcrumb className="px-0 mx-0 mt-6">
            <BreadcrumbList className="flex  flex-row items-center flex-wrap px-0">
                <BreadcrumbItem>
                    <BreadcrumbLink asChild onClick={handleBackToHelpCenter}>
                        <span className="cursor-pointer text-sm md:text-base">Help Center</span>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:flex " />
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-sm md:text-base">{currentCategory}</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:flex" />
                {selectedTitle && (
                    <BreadcrumbItem>
                        <BreadcrumbPage className="bg-[#F4FAE2] text-[#577B14] rounded-lg p-2 text-sm md:text-base">
                            {selectedTitle}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

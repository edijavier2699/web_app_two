// Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <section className="text-[#667085] footerSection font-medium mt-[130px] px-4 sm:px-6 lg:px-8">
            {/* Brands section */}
            <div className="flex flex-col items-center space-y-7 mb-[70px]">
                <p className="text-lg text-center sm:text-xl">
                    Trusted by the world's best companies
                </p>
                <ul className="flex flex-wrap justify-center space-x-10 font-bold text-2xl sm:text-3xl">
                    <li className="flex space-x-4 items-center mb-4 sm:mb-0">
                        <img 
                            alt="brand-image" 
                            className="h-6 w-6 sm:h-8 sm:w-8" 
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Rlogo.png" 
                        />
                        <span className="hidden sm:inline">Command+R</span>
                    </li>
                    <li className="flex space-x-4 items-center mb-4 sm:mb-0">
                        <img 
                            alt="brand-image" 
                            className="h-6 w-6 sm:h-8 sm:w-8" 
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Logotipo_empresa.png" 
                        />
                        <span className="hidden sm:inline">Circooles</span>
                    </li>
                    <li className="flex space-x-4 items-center mb-4 sm:mb-0">
                        <img 
                            alt="brand-image" 
                            className="h-6 w-6 sm:h-8 sm:w-8" 
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Rlogo.png" 
                        />
                        <span className="hidden sm:inline">Command+R</span>
                    </li>
                </ul>
            </div>
            <hr className="border-gray-300" />
            {/* Links section */}
            <div className="flex flex-col sm:flex-row justify-between mt-[35px] mb-[70px] px-4">
                <span className="text-sm text-center sm:text-left">
                    @2024 Tokunize. All rights reserved.
                </span>
                <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm mt-4 sm:mt-0">
                    <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-blue-500">Cookies Settings</a></li>
                </ul>
            </div>
        </section>
    );
};

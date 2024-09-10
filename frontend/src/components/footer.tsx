// Footer.tsx
import React from 'react';
import Logo from "../assets/logo.png"
import "../styles/footer.css"
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
    const navigate = useNavigate()
    return (
        <section className="text-[#667085] footerSection font-medium mt-[80px] md:mt-[100px]  px-4 sm:px-6 lg:px-8">
            <hr className="border-gray-300" />
            {/* Links section */}
            <div className='flex flew-row justify-between items-center iconsContainer mt-3'>
                <div className='flex flew-row '>
                    <ul className='flex space-x-4'>
                        <li className='iconContainer hover:text-[#C8E870]'>
                            <a className='text-2xl' href='https://www.linkedin.com/company/tokunize/' target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li className='iconContainer  hover:text-[#C8E870]' >
                            <a className='text-2xl' href='https://www.instagram.com/tokunize_official/' target="_blank" rel="noopener noreferrer">
                               <FaInstagram />
                            </a>
                        </li>
                        <li className='iconContainer hover:text-[#C8E870]'>
                            <a className='text-2xl' href='https://x.com/tokunize/' target="_blank" rel="noopener noreferrer">
                                <BsTwitterX/>
                            </a>                        
                        </li>
                    </ul>
                </div>
                <div className='logoContainerImg'>
                    <img alt='logo-icon' src={Logo} />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-[35px] mb-[70px] px-4">
                <p className='xs text-center sm:text-left'>@2024 TSSRCT. All rights reserved .</p>
                <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 text-sm mt-4 sm:mt-0">
                    <li onClick={()=>{
                        navigate("/privacy-policy")
                    }}><a  className="hover:text-blue-500 duration-300"><p className='xs'>Privacy Policy</p></a></li>
                    <li onClick={()=>{
                        navigate("/terms-of-services")
                    }}><a className="hover:text-blue-500 duration-300"><p className='xs'>Terms of Service</p></a></li>
                </ul>
            </div>
        </section>
    );
};







{/* <div className="flex flex-col items-center space-y-7 mb-[70px]">
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
            </div> */}
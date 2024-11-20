// Footer.tsx
import React from 'react';
import Logo from "../assets/logo.png"
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export const Footer: React.FC = () => {
    const navigate = useNavigate()
    return (
        <section className="text-[#667085] footerSection font-medium   px-4 sm:px-6 lg:px-8">
            <hr className="border-gray-300" />
            <div className="grid space-y-5  grid-cols-1 sm:grid-cols-4 md:grid-cols-5   items-start md:flex-row justify-between mt-[35px]">
                <div className='flex'>
                    <img alt='logo-icon' className='h-16'  src={Logo} />
                </div>
                <div>   
                    <h4 className='font-bold text-black text-sm  text-md'>Invest</h4>
                    <ul className='flex flex-col'>
                        <li onClick={()=>{
                            navigate("/request-invitation/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500 text-xs text-gray-450 duration-300 cursor-pointer">
                                Sign Up
                            </a>
                        </li>
                        <li onClick={()=>{
                            navigate("/marketplace/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500 text-xs text-gray-450 duration-300 cursor-pointer">
                                Marketplace
                            </a>
                        </li>
                        <li onClick={()=>{
                            navigate("/liquidity-pools/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500 text-xs text-gray-450 duration-300 cursor-pointer">
                                Liquidity Pools
                            </a>
                        </li>
                    </ul>
                </div>
                <div>   
                    <h4 className='font-bold text-black text-sm '>Learn Hub</h4>
                    <ul className='flex flex-col'>
                        <li onClick={()=>{
                            navigate("/blog/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500 text-xs text-gray-450 duration-300 cursor-pointer">
                                Learn
                            </a>
                        </li>
                        <li onClick={()=>{
                            navigate("/faq/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500 text-xs text-gray-450 duration-300 cursor-pointer">
                                FAQ
                            </a>
                        </li>
                        <li onClick={()=>{
                            navigate("/investors/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500  text-xs text-gray-450 duration-300 cursor-pointer">
                                For Investors
                            </a>
                        </li>
                        <li onClick={()=>{
                            navigate("/assets-owners/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500  text-xs text-gray-450 duration-300 cursor-pointer">
                                For Assets Owners
                            </a>
                        </li>
                    </ul>
                </div>
                <div>   
                    <h4 className='font-bold text-black text-sm '>Company</h4>
                    <ul className='flex flex-col'>
                    <li onClick={()=>{
                            navigate("/about-us/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500 text-xs text-gray-450 duration-300 cursor-pointer">
                                About Us 
                            </a>
                        </li>
                        <li onClick={()=>{
                            navigate("/privacy-policy/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500 text-xs text-gray-450 duration-300 cursor-pointer">
                                Privacy Policy
                            </a>
                        </li>
                        <li onClick={()=>{
                            navigate("/legal-notices/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500 text-xs text-gray-450 duration-300 cursor-pointer">
                                Legal Notice
                            </a>
                        </li>
                        <li onClick={()=>{
                            navigate("/terms-of-services/");
                            window.scrollTo(0, 0);
                        }}>
                            <a className="hover:text-blue-500 text-xs text-gray-450 duration-300 cursor-pointer">
                                Terms Of Services
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h4 className='font-bold text-black text-sm mb-2'>Our Social Media</h4>
                    <ul className='flex space-x-4 flex flex-row '>
                        <li className=' duration-300  hover:text-[#C8E870]' >
                            <a className='text-xl' href='https://www.instagram.com/tokunize_official/' target="_blank" rel="noopener noreferrer">
                               <FaInstagram />
                            </a>
                        </li>
                        <li className=' duration-300 hover:text-[#C8E870]'>
                            <a className='text-xl' href='https://x.com/tokunize/' target="_blank" rel="noopener noreferrer">
                                <BsTwitterX/>
                            </a>                        
                        </li>
                        <li className=' duration-300 hover:text-[#C8E870]'>
                            <a className='text-xl' href='https://www.linkedin.com/company/tokunize/' target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-xs mt-12">TSSRCT Technologies (“Tokunize”) maintains a commercial real estate (CRE) technology platform through which companies and individuals who own CRE properties can offer tokenized interests of their properties to qualified investors for investment. Investments involve risk, including principal loss, and, unless otherwise stated, are not guaranteed. Targeted returns are subject to change and are based on modelling performed by the sponsor. Be sure to first consult with a qualified financial adviser and/or tax professional before implementing any strategy discussed herein. There is currently not an active secondary market for digital assets of the type featured on Tokunize. The investor’s ability to liquidate will be dependent on market conditions, and there is no guarantee that a buyer will be available that can offer a price deemed acceptable by the seller. Tokunize is not yet authorised by the FCA and is in the process of acquiring relevant FCA authorisation.</p>
            <p className='text-center font-medium text-sm my-[50px]'>@2024 TSSRCT. All rights reserved .</p>
        </section>
    );
};




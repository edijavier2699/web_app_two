import React from "react";
import { FaLinkedin } from "react-icons/fa";
import mohamedPortrait from "../assets/mohamedPortrait.webp"
import nanaPortrait from "../assets/nanaPortrait.webp"
import { MyButton } from "@/components/signUpBtn";
import { useNavigate } from "react-router-dom";

// Interfaz para definir el tipo de dato del equipo
interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  linkedInUrl: string;
  quote: string;
}

const cardsData = [
  {   
      title: "Fully Compliant Legal Structure",
      description: "Token holders legally have ownership of Tokunize properties. When you purchase tokens in a property, you are directly buying a membership interest in the individual DAO LLC that owns the property. Each DAO LLC owns the deed on its property, all ownership documentation is publicly available online."
  },
  {
      title: "Innovative Secondary Market",
      description: "Sell your investments on the secondary market at any time, adding unparalleled flexibility to commercial real estate investing."
  },
  {
      title: "Invest,  Diversify, and Earn",
      description: "Get weekly rent payouts (not monthly or quarterly) and collect property appreciation when you cash out."
  },
  {
      title: "Secure, Efficient and Transparent",
      description: "No lock-in periods, hidden fees, excess paperwork, 6 month closing periods, or down payments. Receive consistent, transparent reporting  per property."
  },
  {
      title: "Own Properties Without  Headaches",
      description: "Diversify your portfolio without multiplying your workload. Vote on key property decisions, and professional property managers handle the rest."
  },
  {
      title: "Maintain Full Control of your Investments",
      description: "A streamlined investment process, from sign-up to purchase, ensuring that managing your portfolio is straightforward."
  }
];


interface HowItWorksCardProps {
  title: string;
  description: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ title, description }) => {
  return (
      <div className="shadow-md  bg-black hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-start ">
          <h3 className="text-xl md:text-[26px] lg:text-[35px]  text-white font-semibold mb-2 ">{title}</h3>
          <p className="text-white leading-relaxed">{description}</p>
      </div>
  );
};

// Datos del equipo con citas
const teamMembers: TeamMember[] = [
  {
    name: "Mohamed Omar",
    position: "Co-Founder",
    imageUrl: mohamedPortrait,
    linkedInUrl: "https://www.linkedin.com/in/mohamed-omar-5a0084193/",
    quote: "Every brick we lay is a step towards making investment accessible for everyone."
  },
  {
    name: "Nana Ossei",
    position: "Co-Founder",
    imageUrl: nanaPortrait,
    linkedInUrl: "https://www.linkedin.com/in/nana-ossei-16931422a/",
    quote: "In every challenge, I see an opportunity to reshape how we invest in our future."
  },
  // Agrega más miembros del equipo según sea necesario
];

export const AboutUs: React.FC = () => {
  const navigate = useNavigate()

  const navigateSignUp = () =>{
    navigate("/request-invitation/")
  }
  
  return (
    <section className="pt-16 px-[20px] md:px-[60px]">
      {/* Quiénes Somos */}
      <div className="text-center mb-12 py-5 flex flex-col md:flex-row items-center gap-8 md:h-[350px]">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1525438160292-a4a860951216?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our Mission"
            className="w-full h-[350px] rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="text-left w-full md:w-1/2 md:text-left md:pl-8 flex flex-col justify-center h-full">
          <h2 className="md:text-3xl lg:text-4xl xl:text-5xl text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-bold text-black">Tokunize</span> is a next-generation commercial real estate investment platform with the belief that real estate investing should be secure, simple, and swift. We identify and list CRE across asset classes, risk profiles, and markets, bringing assets with compelling risk-adjusted returns to investors including IFAs, wealth managers, family offices, institutional investors, and individual investors.
          </p>
        </div>
      </div>
    
      {/* Nuestra Misión */}
      <div className="text-center h-[350px] mb-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-left ">
          <h2 className="md:text-3xl lg:text-4xl xl:text-5xl text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make it as simple, swift, and secure as possible for investors anywhere in the world to build a portfolio of premium real estate.
          </p>
        </div>
        <div className="text-5xl bg-[#C8E870] py-7 rounded-lg w-full md:w-1/2 font-bold text-gray-900 flex flex-col items-center justify-center h-full">
          <span className="mb-2">SECURE.</span>
          <span className="mb-2">SIMPLE.</span>
          <span className="mb-2">SWIFT.</span>
        </div>
      </div>
      <div className=" text-center mb-12 min-h-[33vh] items-center flex flex-col justify-center space-y-2  border-t border-b">
        <h4 className="text-3xl font-bold sm:w-[85%] md:text-3xl  lg:text-5xl lg:w-[70%] ">Ready to unlock the potential of commercial real estate? </h4>
        <span className="block text-lg font-medium text-gray-700">I’m ready!  </span>
        <MyButton 
            parentMethod={navigateSignUp}
            label="Sign Up"
          />
      </div>

      <div className='space-y-[30px] mb-12 rounded-lg'>
                <h4 className="text-4xl font-semibold">The Tokunize Difference</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {cardsData.map((card, index) => (
                        <HowItWorksCard key={index} title={card.title} description={card.description} />
                    ))}
                </div>
      </div>

      {/* Conoce al Equipo */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 text-left mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <article key={member.name} className="bg-white border shadow-lg rounded-lg p-4 flex flex-col sm:flex-row items-start text-left">
              <div className="flex-shrink-0 w-full  mb-4 sm:mb-0">
              <a href={member.linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 duration-300 text-center">
                  <FaLinkedin size={44} />
                </a>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-36 h-36 object-cover rounded-full mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-gray-900 text-center">{member.name}</h3>
                <p className="text-gray-500 mb-2 text-center">{member.position}</p>
                <blockquote className="text-gray-400 text-sm italic mb-3 text-center">"{member.quote}"</blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

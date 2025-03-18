import { DemoModal } from '@/components/demoModal';
import '../App.css';
import { HeroSection } from '../components/heroSection';
import { Toaster } from '../components/ui/toaster';
import { FaBitcoin, FaExchangeAlt, FaNetworkWired } from "react-icons/fa";
import { FaMoneyBillAlt, FaClock, FaLock } from "react-icons/fa";



const SolutionOne = () =>{
  return (
    <>
      <Toaster />
      <HeroSection 
        heroSectionTitle='Buying and selling property is slow and complex. Not anymore.'
        heroSubtitle='We make property transactions simple, fast, efficient, and stress-free.'
      />

      <section className="py-16 px-[20px] md:px-[60px]">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Goal
            <div className="mt-4 w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We provide developers, agents, landlords, and buyers with an efficient, secure, and cost-effective way to buy and sell real estate.
          </p>
        </div>
      
        <section className="py-16 border-t border-b border-gray-100 text-center">
          <div className=" mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              UNIQUE DIGITAL PROPERTY TOKENS
              <div className="mt-2 w-16 h-1 bg-primary-600 rounded-full"></div>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl  mx-auto leading-relaxed">
              Digital Property Tokens (DPTs) contain all the necessary information for a property transaction. We make it possible to compress all documents and processes into a simple smart platform to complete your transaction.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex flex-col items-center mb-4">
                <FaBitcoin className="text-4xl  text-[#C8E870] mb-4 transition-colors group-hover:text-primary-800" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Conversion</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                Convert physical real estate into unique DPTs with blockchain security
                </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex flex-col items-center mb-4">
                <FaExchangeAlt className="text-4xl text-[#C8E870]   mb-4 transition-colors group-hover:text-primary-800" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Seamless Transactions</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                Buy and sell properties seamlessly with reduced fees and instant processing
                </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex flex-col items-center mb-4">
                <FaNetworkWired className="text-4xl text-[#C8E870]  mb-4 transition-colors group-hover:text-primary-800" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Peer-to-Peer Platform</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                Our dedicated platform enables direct transactions with smart contract support
                </p>
            </div>
            </div>
            <HowItWorks/>
          </div>
        </section>
        <WhatYouGain/>
        <GetInTouch/>
        
      </section>
    </>
  );
}

export default SolutionOne;

import { FaRegHandshake, FaFileContract, FaUserCheck, FaMoneyCheckAlt, FaRegSave } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaRegHandshake className="w-6 h-6" />,
      title: "Seller and buyer agree on terms",
      description: "The property sale terms are set and confirmed."
    },
    {
      icon: <FaFileContract className="w-6 h-6" />,
      title: "Legal documents processed ",
      description: "All necessary documents are verified and digitally secured."
    },
    {
      icon: <FaUserCheck className="w-6 h-6" />,
      title: "ID checks completed",
      description: " Both parties undergo quick and secure identity verification."
    },
    {
      icon: <FaMoneyCheckAlt className="w-6 h-6" />,
      title: "Payment setup and confirmation",
      description: "Funds are securely arranged and verified.t"
    },
    {
      icon: <FaExchangeAlt className="w-6 h-6" />,
      title: "DPT Transfer",
      description: "The Digital Property Token moves from seller to buyer, officially recognizing the buyer as the new owner."
    },
    {
      icon: <FaRegSave className="w-6 h-6" />,
      title: "Land registry update ",
      description: "The transaction is recorded, ensuring full legal recognition."
    }
  ];

  return (
    <section className="pt-32  bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
          HOW IT WORKS

            <div className="mt-4 w-16 h-1 bg-[#C8E870] mx-auto rounded-full" />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We improve the existing system by simplifying and securing every step of the transaction. Here’s how it works:

          </p>
        </div>

        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-gray-200 hidden md:block" />
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="md:flex md:even:flex-row-reverse md:items-center md:justify-between"
              >
                {/* Step (mobile) */}
                <div className="md:hidden bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-[#C8E870]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#C8E870] flex items-center justify-center">
                      <span className="font-bold text-gray-900">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Step (desktop) */}
                <div className="hidden md:flex w-full items-center justify-center">
                  <div className={`w-1/2 p-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {index % 2 === 0 && (
                      <>
                        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </>
                    )}
                  </div>
                  
                  <div className="relative mx-4">
                    <div className="w-16 h-16 rounded-full bg-[#C8E870] flex items-center justify-center border-4 border-white shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-gray-500 font-mono">
                      0{index + 1}
                    </div>
                  </div>

                  <div className={`w-1/2 p-8 ${index % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                    {index % 2 !== 0 && (
                      <>
                        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        {/* CTA Section */}
        <div className="mt-16 text-center bg-[#EBF9BE] rounded-xl  p-8 shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mt-8 max-w-2xl mx-auto">
          By digitizing these steps, we make the process faster, more efficient, and more secure.
          </h2>
          <h3 className="text-gray-700 my-8  text-2xl max-w-2xl mx-auto">
          Convert real estate into Digital Property Tokens (DPTs) and streamline transactions like never before

          </h3>
        </div>
      </div>
    </section>
  );
};




const WhatYouGain = () => {
    const benefits = [
      {
        icon: <FaMoneyBillAlt className="text-4xl text-[#C8E870] mb-4" />,
        title: "Save Money",
        description: "Reduce unnecessary overhead and administrative expenses with no hidden costs"
      },
      {
        icon: <FaClock className="text-4xl text-[#C8E870] mb-4" />,
        title: "Save Time",
        description: "Cut transaction times from months to days with automated processes"
      },
      {
        icon: <FaLock className="text-4xl text-[#C8E870] mb-4" />,
        title: "Increase Transparency",
        description: "Complete visibility throughout the entire transaction lifecycle"
      }
    ];
  
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You Gain
              <div className="mt-4 w-16 h-1 bg-[#C8E870] mx-auto rounded-full" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              By using tokenization, you unlock a new era of real estate transactions
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center ">
                    <span className='block mx-auto text-center w-full flex items-center justify-center'> {benefit.icon} </span>
                  <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
  
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            We simplify real estate transactions, making buying and selling property quicker, 
            more secure, and more cost-effective than traditional methods.
          </p>
        </div>
      </section>
    );
  }
  
  const GetInTouch = () => {
    return (
      <section className="py-16 px-[20px] md:px-[60px] rounded-xl bg-[#EBF9BE]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your Real Estate Experience
            <div className="mt-4 w-16 h-1 bg-gray-900 mx-auto rounded-full" />
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover how our innovative solutions can meet your unique needs. 
            Contact us today to explore the perfect tools tailored for your success!
          </p>
          <DemoModal/>
        </div>
      </section>
    );
  }
  


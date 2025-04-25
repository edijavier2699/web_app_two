import { FaHome, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';
import { Button } from '../ui/button';

const TokunizeSolution = () => {
  return (
    <div 
      className="items-center flex px-10 justify-center relative bg-[url('https://images.unsplash.com/photo-1684933868925-1350f33b1126?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
      style={{ minHeight: 'calc(100vh - 80px)' }}
    >     

      <div className="absolute inset-0 bg-[#F4FAE2]/90"></div>
      
      <div className=" relative mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sección de texto */}
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-3xl font-semibold text-[#A0CC29] uppercase tracking-wide">
              FOR INSTITUTIONAL INVESTORS
            </h2>
            <h2 className="text-5xl font-medium text-[#334054] leading-[1.3]">
              Transforming Home Equity Into an Investable, Digital Asset
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tokunize partners with loan originators to offer a shared appreciation home equity 
              loan with no interest or monthly payments. Homeowners keep control of their most 
              important asset while gaining a partner in its future growth.
            </p>
            <Button className="mt-6 px-8 py-6 ttransition-colors">
              Explore Investment Opportunities
            </Button>
          </div>

          {/* Sección de características */}
          <div className="flex flex-col justify-center gap-6">
          <div className="flex space-x-5 items-center">
              <FaHome className="text-4xl text-[#A0CC29] mb-4" />
              <h3 className="text font-bold text-gray-900 mb-2">ATTRACTIVE COMBINATION OF EXPECTED RETURN + VOLATILITY</h3>
            </div>

            <div className="flex space-x-5 items-center">
              <FaChartLine className="text-4xl text-[#A0CC29] mb-4" />
              <h3 className="text font-bold text-gray-900 mb-2">LOW CORRELATION TO FINANCIAL ASSETS</h3>
            </div>

            <div className="flex space-x-5 items-center">
              <FaUsers className="text-4xl text-[#A0CC29] mb-4" />
              <h3 className="text font-bold text-gray-900 mb-2">NATURAL INFLATION HEDGE</h3>
            </div>

            <div className="flex space-x-5 items-center">
              <FaHandshake className="text-4xl text-[#A0CC29] mb-4" />
              <h3 className="text font-bold text-gray-900 mb-2">INTERESTS ALIGNED WITH HOMEOWNER</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokunizeSolution;
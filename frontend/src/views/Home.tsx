import Herosection from '@/components/landingPage/Herosection';
import { FaHome, FaChartLine, FaUsers, FaLock } from 'react-icons/fa'; // Import icons from react-icons
import TokunizeGoal from '@/components/landingPage/TokunizeGoal';
import TokunizeSolution from '@/components/landingPage/TokunizeSolution';
import HowItWorks from '@/components/landingPage/HowItWorks';
import SocialImpact from '@/components/landingPage/SocialImpact';
import { FAQ } from '@/components/faq';
import Banner from '@/components/landingPage/Banner';


const Home = () => {
  return (
    <section>
      <Herosection />

      {/* Mini Characteristics Section */}
      <div className="max-w-7xl mt-12 mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Characteristic 1 */}
          <div className="flex items-center border justify-start space-x-4 p-6 bg-white">
            <FaHome className="text-4xl text-[#C8E870]" /> {/* Home Icon */}
            <p className="font-medium text-lg text-gray-700">A NEW SOLUTION FOR HOME EQUITY</p>
          </div>

          {/* Characteristic 2 */}
          <div className="flex items-center border justify-start space-x-4 p-6 bg-white">
            <FaChartLine className="text-4xl text-[#C8E870]" /> {/* Chart Line Icon */}
            <p className="font-medium text-lg text-gray-700">NO COMPLICATED OR UNFAIR CONTRACTS</p>
          </div>

          {/* Characteristic 3 */}
          <div className="flex items-center border justify-start space-x-4 p-6 bg-white">
            <FaUsers className="text-4xl text-[#C8E870]" /> {/* Users Icon */}
            <p className="font-medium text-lg text-gray-700">CLOSED-END SECOND MORTGAGE</p>
          </div>

          {/* Characteristic 4 */}
          <div className="flex items-center border justify-start space-x-4 p-6 bg-white">
            <FaLock className="text-4xl text-[#C8E870]" /> {/* Lock Icon */}
            <p className="font-medium text-lg text-gray-700">DIFFERENT FROM EXISTING HOME EQUITY AND SHARED APPRECIATION PRODUCTS</p>
          </div>
        </div>
      </div>
      <TokunizeGoal/>
      <TokunizeSolution/>
      <HowItWorks/>

      <hr className="mb-6" />

      <SocialImpact/>
      <FAQ/>
      <Banner/>
    </section>
  );
};

export default Home;

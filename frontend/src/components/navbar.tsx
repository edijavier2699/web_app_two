import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmallLogo from "../assets/logoSVG.svg";
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Invest",
    href: "/invest/",
    subItems: [
      {
        title: "How it Works",
        href: "/how-it-works/",
      }
    ]
  },
  {
    title: "Tokenised Transactions",
    href: "/",
  },
];

const navigation = [
  { name: 'About Us', href: "/about-us/" },
  { name: 'Learn', href: "/blog/" },
  { name: 'FAQ', href: "/faq/" },
  { name: 'Request Invitation', href: '/request-invitation/' },
];

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Estado para controlar si se está haciendo hover sobre "Invest"
  const [isInvestHovered, setIsInvestHovered] = useState(false);

  const authenticatedNavigation = isAuthenticated
    ? [...navigation, { name: 'Dashboard', href: "/dashboard/" }]
    : navigation;

  const handleInvestHover = () => {
    setIsInvestHovered(true);
  };

  const handleInvestLeave = () => {
    setIsInvestHovered(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 px-6 bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img className="h-12 w-auto" src={SmallLogo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <div
            className="relative"
            onMouseEnter={handleInvestHover}
            onMouseLeave={handleInvestLeave}
          >
            {/* Solutions Dropdown */}
            <button className="text-base font-medium hover:text-[#C8E870] duration-300">
              Solutions
            </button>
            <div
              className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ opacity: isInvestHovered ? 1 : 0 }}
            >
               {solutions.map((solution) => (
                      <div key={solution.title}>
                        <a
                          href={solution.href}
                          className="block text-sm py-2 px-4 rounded-md hover:bg-gray-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {solution.title}
                        </a>
                        {solution.title === 'Invest' && solution.subItems?.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block text-sm py-2 pl-8 rounded-md hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            → {subItem.title}
                          </a>
                        ))}
                      </div>
                    ))}
            </div>
          </div>

          {authenticatedNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-700 hover:text-[#C8E870] duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open Menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>

          {isMobileMenuOpen && (
            <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-lg p-4">
              <div className="space-y-4">
                <div>
                  <button
                    className="w-full flex justify-between items-center p-2 rounded-md hover:bg-gray-100"
                  >
                    <span className="font-medium">Solutions</span>
                  </button>
                  <div className="mt-2 space-y-2 pl-4">
                    {solutions.map((solution) => (
                      <div key={solution.title}>
                        <a
                          href={solution.href}
                          className="block text-sm py-2 px-4 rounded-md hover:bg-gray-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {solution.title}
                        </a>
                        {solution.title === 'Invest' && solution.subItems?.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block text-sm py-2 pl-8 rounded-md hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            → {subItem.title}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                {authenticatedNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-base font-medium text-gray-700 hover:text-[#C8E870]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

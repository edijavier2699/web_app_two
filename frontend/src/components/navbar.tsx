import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmallLogo from "../assets/logoSVG.svg";
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "@/components/ui/button";

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

  const authenticatedNavigation = isAuthenticated
    ? [...navigation, { name: 'Dashboard', href: "/dashboard/" }]
    : navigation;

  return (
    <nav className="sticky top-0 z-50 py-4 px-6 bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img className="h-12 w-auto" src={SmallLogo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {authenticatedNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base duration-300 font-medium text-gray-700 hover:text-[#C8E870] duration-300"
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
                {authenticatedNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-base duration-300 font-medium text-gray-700 hover:text-[#C8E870]"
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

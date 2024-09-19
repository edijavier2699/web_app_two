import React, { useState } from 'react';
import { WaitlistModal } from './waitlist';
import SmallLogo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';  // Import Auth0 hook

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavigationItem[] = [
  { name: 'Learn', href: "/blog/", current: false },
  { name: 'Waitlist', href: '#', current: false }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0(); // Get authentication status from Auth0

  // Conditionally add the Dashboard link if the user is authenticated
  const authenticatedNavigation = isAuthenticated
    ? [...navigation, { name: 'Dashboard', href: "/dashboard/", current: false }]
    : navigation;

  return (
    <nav className='md:px-[60px] py-5 border md:border-0 '>
      <div className="mx-auto ">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-1 px-[20px] md:px-0 justify-start sm:items-stretch sm:justify-start">
            <div onClick={() => { navigate("/") }}>
              <img
                className="h-[85px] w-auto"
                src={SmallLogo}
                alt="Your Company"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex px-[20px] md:px-0 sm:space-x-4 sm:ml-auto">
            {authenticatedNavigation.map((item) => (
              item.name === 'Waitlist' ? (
                <div key={item.name}>
                  <WaitlistModal />
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-white' : 'text-xl hover:bg-[#C8E870] duration-300 ease-in-out',
                    'px-3 py-1 rounded-md text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="absolute right-0 px-[20px]  flex px-2 items-center justify-end sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-[#C8E870] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#C8E870] " id="mobile-menu">
          <div className="p-3 space-y-3 w-full">
            {authenticatedNavigation.map((item) => (
              item.name === 'Waitlist' ? (
                <div key={item.name} className="flex h-full items-center justify-center">
                  <WaitlistModal />
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-[#C8E870] text-2xl text-black' : 'flex items-center justify-center text-xl font-semibold mx-auto hover:bg-[#A0CC28] duration-300 ease-in-out',
                    'rounded-md px-9 py-2   font-medium duration-300 ease-in-out'
                  )}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

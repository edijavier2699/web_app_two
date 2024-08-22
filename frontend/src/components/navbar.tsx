// Navbar.tsx
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavigationItem } from '../types/types'; 
import Logo from "../assets/logo.png";

const navigation: NavigationItem[] = [
  { name: 'Learn', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'How It Works', href: '#', current: true },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className={`bg-white text-black border-b ${menuOpen ? 'bg-[#C8E870]' : ''}`}>
      <div className="relative navbar px-[20px] md:px-[80px] flex h-[80px] items-center justify-between">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-shrink-0 items-left">
            <img
              alt="Your Company"
              src={Logo}
              className="h-[80px] w-auto"
            />
          </div>
          <div className="hidden sm:flex sm:items-center sm:justify-center rounded-md ">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-[#C8E870] text-black hover:bg-[#A0CC28]' : 'text-[#121212]',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${menuOpen ? 'bg-white text-black' : 'text-black-700'}`}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
              ) : (
                <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`absolute inset-x-0 top-[80px] z-30 ${menuOpen ? 'block bg-[#C8E870]' : 'hidden'} sm:hidden`}>
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-[#F2F4F7] text-black' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

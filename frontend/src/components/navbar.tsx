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
    <nav className="bg-white h-[80px] text-black border-b">
      <div className="relative navbar flex h-full items-center justify-between">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img
              alt="Your Company"
              src={Logo}
              className="h-[80px] w-auto"
            />
          </div>
          <div className="hidden sm:flex sm:items-center sm:justify-center rounded-md px-3">
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
              className="inline-flex items-center justify-center rounded-md p-2 text-black-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
      <div className={`fixed inset-0 z-30 bg-white shadow-lg ${menuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-[#C8E870] text-black' : 'text-black-300 hover:bg-gray-700 hover:text-white',
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

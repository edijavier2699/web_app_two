// Navbar.tsx
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavigationItem } from '../types/types'; // Importa la interfaz

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
    <nav className="bg-white text-black border-b">
      <div className="navbar">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 justify-end">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-[#C8E870] text-black hover:bg-[#A0CC28]' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
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
      {menuOpen && (
        <div className="sm:hidden transition-transform duration-300 ease-out transform">
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
      )}
    </nav>
  );
};

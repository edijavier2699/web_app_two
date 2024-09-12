import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavigationItem } from '../types/types'; 
import Logo from "../assets/logo.jpg";
import { WaitlistModal } from './waitlist';

const navigation: NavigationItem[] = [
  // { name: 'Learn', href:"#", current: false }, 
  // { name: 'How it works', href:"#", current: false }, 
  // { name: 'Are you a property Owner?', href:"#", current: false },
  { name: 'Waitlist', href:"#", current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className={`bg-white text-black ${menuOpen ? 'bg-[#C8E870]' : ''}`}>
      <div className="relative navbar px-[20px] md:px-[80px] flex h-[80px] items-center justify-between">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-shrink-0 items-left">
            <img
              alt="Your Company"
              src={Logo}
              className='w-[200px] h-[55px]'
            />
          </div>
          <div className="hidden sm:flex ">
            <div className="flex  items-center">
              {navigation.map((item) => (
                item.name === 'Waitlist' ? (
                  <div key={item.name} className="flex h-full pb-7 items-center justify-center">
                    <WaitlistModal/>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-[#C8E870]  text-black' : '  text-[#121212] hover:underline duration-300 ease-in-out',
                      'rounded-md px-9 py-2 text-sm font-medium duration-300 ease-in-out'
                    )}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`button-navbar font-semibold inline-flex items-center justify-center rounded-md px-5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${menuOpen ? 'bg-white text-black' : 'text-black-700'}`}
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
            item.name === 'Waitlist' ? (
              <div key={item.name} className="flex items-center justify-start">
                    <WaitlistModal/>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'text-black hover:underline' : 'text-black-700 ',
                  'block px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

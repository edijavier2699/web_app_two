
import SmallLogo from "../assets/logoSVG.svg";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavigationItem[] = [
  { name: 'How It Works', href: "/how-it-works/", current: false },
  { name: 'About Us', href: "/about-us/", current: false },
  { name: 'Learn', href: "/blog/", current: false },
  { name: 'FAQ', href: "/faq/", current: false },
  { name: 'Request Invitation', href: '/request-invitation/', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  
  // Conditionally add the Dashboard link if the user is authenticated
  const authenticatedNavigation = isAuthenticated
    ? [...navigation, { name: 'Dashboard', href: "/dashboard/", current: false }]
    : navigation;

  return (
    <nav className='lg:px-[60px] py-1 border bg-[white] text-black md:border-0'>
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-1 px-[20px] lg:px-0 justify-start sm:items-stretch sm:justify-start">
            <div onClick={() => { navigate("/") }}>
              <img
                className="h-12 w-auto cursor-pointer"
                src={SmallLogo}
                alt="Tokunize"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex px-[20px] md:px-0 sm:space-x-4 sm:ml-auto">
            {authenticatedNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.name === 'Request Invitation' ? 'bg-[#C8E870] hover:bg-[#A0CC29] duration-300' : '',
                  item.current ? 'text-white' : 'text-[17px] hover:bg-[#C8E870] duration-300 ease-in-out',
                  'px-1 py-2 rounded-md text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button using Sheet */}
          <div className="absolute right-0 px-[20px] flex px-2 items-center justify-end lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-3  space-y-4 ">
                  {authenticatedNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'text-xl text-black' : 'flex  font-semibold  hover:bg-[#A0CC28] duration-300 ease-in-out',
                        'rounded-md p-2 font-medium duration-300 ease-in-out'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RequestQuoteBtn from '@/components/RequestQuoteBtn';
import Image from 'next/image';
import { div } from 'framer-motion/client';

interface LinkProps {
  href?: string;
}

const NavBar: React.FC<LinkProps> = ({ href }) => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Market',
      path: '/market',
    },
    {
      name: 'Support',
      path: '/support',
    },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <section className="md:shadow-none z-30 h-[10vh] lg:h-[100px] w-[100vw] fixed top-0   bg-primary ">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in text-white container bg-primary w-full h-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <Link href="/">
              <img
                src="/images/logo.svg"
                alt="logo"
                className="h-[10vh] lg:h-[100px]"
              />
            </Link>
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-base xl:text-xl lg:text-xl items-center select-none">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`${
                  link.path === pathname && 'text-accent'
                } hover:text-accent cursor-pointer flex items-center gap-2 font-[500] text-gray transition-all duration-300`}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <RequestQuoteBtn />
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 right-0 text-white w-full z-[999] bg-primary animate-in fade-in zoom-in ${
          menu ? 'bg-primary' : ''
        }`}
      >
        <div className="flex justify-between mx-4">
          <div className="flex gap-[50px] text-[20px] items-center select-none">
            <Link href="/">
              <img src="/images/logo.svg" alt="logo" className="h-16" />
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in  text-2xl"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                className="cursor-pointer animate-in fade-in zoom-in text-2xl"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  className={`${
                    link.path === pathname && 'text-accent'
                  } hover:text-accent cursor-pointer flex items-center gap-2 font-[500] text-gray transition-all duration-300`}
                  href={link.path}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-[40px] select-none">
                <RequestQuoteBtn />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default NavBar;

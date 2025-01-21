'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RequestQuoteBtn from '@/components/RequestQuoteBtn';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Market', path: '/market' },
    { name: 'Support', path: '/support' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setMenu((prev) => !prev);

  return (
    <div className="relative w-full">
      <nav className="fixed top-0 z-30 w-full bg-primary h-[10vh] lg:h-[100px]">
        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-between container mx-auto h-full text-white">
          <Link href="/" className="h-[10vh] lg:h-[100px] w-auto">
            <Image
              src="/logo-transparent.png"
              alt="Logo"
              width={150}
              height={100}
              className="h-full p-6 w-auto"
            />
          </Link>
          <div className="flex items-center gap-[20px] xl:gap-[50px] text-base xl:text-xl font-medium">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-all duration-300 ${
                  link.path === pathname ? 'text-accent' : 'text-gray'
                } hover:text-accent`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center  gap-2 items-center">
            <div className="flex justify-center  gap-2 items-center h-[25px]">
              <Image
                height={100}
                width={150}
                alt="Nigerian flag"
                src="/images/nigeria.svg"
                className="h-full w-auto"
              />
              <Image
                height={100}
                width={150}
                alt="italian flag"
                src="/images/italy.svg"
                className="h-full w-auto"
              />
            </div>
            <RequestQuoteBtn />
          </div>
        </div>

        {/* Mobile View */}
        <div className="w-full">
          <div className="lg:hidden fixed top-0 w-[100vw] bg-primary text-white shadow-sm z-[999]">
            <div className="flex items-center justify-between mx-4 py-2">
              <Link href="/" className="h-16 w-auto">
                <Image
                  src="/logo-transparent.png"
                  alt="Logo"
                  width={150}
                  height={100}
                  className="h-full p-2 w-auto"
                />
              </Link>
              <button
                className="text-2xl p-2"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {menu ? <X /> : <Menu />}
              </button>
            </div>

            {menu && (
              <div className="animate-in slide-in-from-right flex flex-col gap-8 mt-4 px-4">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`transition-all duration-300 ${
                      link.path === pathname ? 'text-accent' : 'text-gray'
                    } hover:text-accent`}
                    onClick={toggleMenu} // Close menu on link click
                  >
                    {link.name}
                  </Link>
                ))}
                <RequestQuoteBtn />
                <div className="flex justify-start gap-2 items-center h-[25px] mb-2">
                  <Image
                    height={100}
                    width={150}
                    alt="Nigerian flag"
                    src="/images/nigeria.svg"
                    className="h-full w-auto"
                  />
                  <Image
                    height={100}
                    width={150}
                    alt="italian flag"
                    src="/images/italy.svg"
                    className="h-full w-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

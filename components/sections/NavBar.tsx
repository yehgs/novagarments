'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RequestQuoteBtn from '@/components/RequestQuoteBtn';
import Image from 'next/image';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';

interface LanguageOption {
  label: string;
  value: string;
  flag: string;
}

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>({
    label: 'UK',
    value: 'uk',
    flag: '/images/uk.svg',
  });

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Market', path: '/market' },
    { name: 'Support', path: '/support' },
    { name: 'About Us', path: '/about' },
  ];

  const languageOptions: LanguageOption[] = [
    { label: 'UK', value: 'uk', flag: '/images/uk.svg' },
    { label: 'Italy', value: 'it', flag: '/images/italy.svg' },
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
          <div className="flex items-center gap-4">
            {/* Language Dropdown */}
            <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
              <div className="relative">
                <ListboxButton className="flex items-center gap-2">
                  <Image
                    src={selectedLanguage.flag}
                    alt={selectedLanguage.label}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-sm font-medium">
                    {selectedLanguage.label}
                  </span>
                </ListboxButton>
                <ListboxOptions className="absolute mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                  {languageOptions.map((language) => (
                    <ListboxOption
                      key={language.value}
                      value={language}
                      className="cursor-pointer px-4 py-2 text-sm data-[focus]:bg-blue-100 text-black hover:bg-blue-100"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={language.flag}
                          alt={language.label}
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                        <span>{language.label}</span>
                      </div>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
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
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center gap-4">
                  <Listbox
                    value={selectedLanguage}
                    onChange={setSelectedLanguage}
                  >
                    <div className="relative">
                      <ListboxButton className="flex items-center gap-2">
                        <Image
                          src={selectedLanguage.flag}
                          alt={selectedLanguage.label}
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                        <span className="text-sm font-medium">
                          {selectedLanguage.label}
                        </span>
                      </ListboxButton>
                      <ListboxOptions className="absolute mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                        {languageOptions.map((language) => (
                          <ListboxOption
                            key={language.value}
                            value={language}
                            className="cursor-pointer px-4 py-2 text-sm data-[focus]:bg-blue-100 text-black"
                          >
                            <div className="flex items-center gap-2">
                              <Image
                                src={language.flag}
                                alt={language.label}
                                width={20}
                                height={20}
                                className="h-5 w-5"
                              />
                              <span>{language.label}</span>
                            </div>
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>
                </div>
                <RequestQuoteBtn />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

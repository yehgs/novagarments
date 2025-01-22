import HeaderText from '../HeaderText';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLink1 = [
    { name: 'Focus', path: '/focus' },
    { name: 'Service', path: '/service' },
    { name: 'Market', path: '/market' },
    { name: 'Support', path: '/support' },
  ];
  const footerLink2 = [
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Policy & Privacy', path: '/policy' },
    { name: 'Terms and Conditions', path: '/terms' },
  ];
  const footerLink3 = [
    { name: 'POLICY & PRIVACY', path: '/policy' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Terms and Conditions', path: '/terms' },
  ];

  return (
    <section className="w-[100vw] flex flex-col bg-tertiary">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 justify-between items-start container py-12 w-full">
        <div className="col-span-1 lg:col-span-2 flex flex-col items-start gap-10">
          <Image
            src="/logo-transparent.png"
            alt="logo"
            width={268}
            height={1880}
            className="lg:h-24 h-20"
          />
          <HeaderText
            title="PRODUCE SAFELY AND GROW YOUR BUSINESS."
            className="md:text-2xl lg:text-3xl md:max-w-md text-xl max-w-xs"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-between text-white lg:text-xl text-base font-semibold gap-4 lg:gap-6 mt-20">
          {footerLink1.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-accent transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex flex-col justify-between text-white lg:text-xl text-base font-semibold gap-4 lg:gap-6 mt-20">
          {footerLink2.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-accent transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex flex-col mt-20 gap-4 lg:gap-6 text-white">
          <h1 className="lg:text-xl text-base font-semibold">Contact</h1>
          <p className="lg:text-xl text-base font-light">
            John M Keynesplein, <br /> 1 - 1066EP,
            <br /> Amsterdam, Netherlands.
          </p>
          <div className="text-base font-light">
            <a
              href="mailto:info@novagarments.com"
              className="hover:text-accent hover:font-normal transition-all duration-300"
            >
              info@novagarments.com
            </a>
            <p>novagarments.com</p>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="text-white flex flex-col md:flex-row justify-between items-center py-6 lg:text-xs md:text-base capitalize container text-sm">
          <ul>
            <li className="flex gap-12">
              {footerLink3.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="hover:text-accent transition-all duration-300 uppercase font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </li>
          </ul>
          <span>© NOVAGARMENT {currentYear}</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';
import StairEffect from '@/components/StairEffect';
import PageTransition from '@/components/PageTransition';
import WhatsAppChat from '@/components/WhatsAppChat';
import CookieNotification from '@/components/CookieNotification';
import SubscriptionPopup from '@/components/SubscriptionPopup';
import PopUpSlider from '@/components/PopUpSlider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nova Garments Group',
  description:
    'Production, Finance, Logistics everything you need to make grow your business.',
  icons: {
    icon: [
      '/nova-logo.svg',
      { url: '/nova-logo.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <StairEffect />
          <PageTransition>
            <NavBar />
            <div className="flex-grow mt-[10vh] lg:mt-[100px]">{children}</div>
            <Footer />
            <WhatsAppChat />
            <CookieNotification />
            <PopUpSlider />
            {/* <SubscriptionPopup /> */}
          </PageTransition>
        </div>
      </body>
    </html>
  );
}

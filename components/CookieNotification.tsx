'use client';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import useLanguageStore from '@/store/useLanguageStore';
import { homepageTranslate } from '@/app/utils/translate';

const CookieNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { translation, detectUserLanguage } = useLanguageStore();
  useEffect(() => {
    detectUserLanguage();
  }, [detectUserLanguage]);

  useEffect(() => {
    const storedExpiry = localStorage.getItem('cookieAccepted');
    const dismissed = localStorage.getItem('cookieDismissed');

    if (dismissed) {
      setIsVisible(false);
      return;
    }

    if (storedExpiry) {
      const expiryDate = new Date(storedExpiry);
      const currentDate = new Date();

      if (currentDate < expiryDate) {
        setIsVisible(false);
        return;
      }
    }

    setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);

    localStorage.setItem('cookieAccepted', expiryDate.toISOString());
    setIsVisible(false);
  };

  const cancelPopup = () => {
    localStorage.setItem('cookieDismissed', 'true'); // Store cancel action
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/50 text-white flex justify-center items-center p-4 z-50">
      <div className="bg-white text-black p-4 rounded-lg shadow-lg flex items-center gap-4">
        <span>
          🍪{' '}
          {homepageTranslate.cookieSection[translation]?.text ||
            homepageTranslate.cookieSection.uk.text}
        </span>
        <button
          onClick={acceptCookies}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {homepageTranslate.cookieSection[translation]?.btnText ||
            homepageTranslate.cookieSection.uk.btnText}
        </button>
        <button
          onClick={cancelPopup}
          className="text-gray-600 hover:text-red-500 transition"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default CookieNotification;

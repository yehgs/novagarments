// components/WhatsAppChat.tsx
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppChat: React.FC = () => {
  return (
    <a
      href="https://wa.me/31685398309?text=Hello,%20I%20visited%20your%20website%20Novagarments.com,%20I'd%20like%20to..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-20 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="Chat on WhatsApp"
    >
      <BsWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppChat;

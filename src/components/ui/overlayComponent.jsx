"use client";
// components/Overlay.js
import { useState } from 'react';
import { XCircleIcon } from 'lucide-react';
// Overlay component that accepts isOpen and onClose props
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
const OverlayContent = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Overlay Content */}
      <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <XCircleIcon/>
        </button>
        <h2 className="text-xl font-bold mb-4 text-black">Get Registered Now</h2>
        <p className="mt-2.5 text-gray-600">
        Message one of our verified agents for your Delux registration
        </p>
        <a className="mt-2.5 bg-amber-500 rounded-xl text-white px-3 py-2 inline-flex justify-center items-center gap-2 flex-1" href="/register">Register<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
        <p className="mt-2.5 text-gray-600">
        It is also important for you to join our verified social handles for more information on how Delux works.
        </p>
        <div className="mt-3.5 flex flex-row gap-10 items-center justify-around ">
          <a href="api.deluxplatform.ng/whatsApplink"> <div className="flex flex-col gap-5 items-center" ><FaWhatsapp size={30} color="#25D366" /><p className='text-black' >WhatsApp</p></div> </a>
          <a href="api.deluxplatform.ng/Telegramlink"> <div className="flex flex-col gap-5 items-center" > <FaTelegram size={30} color="#0088cc" /> <p className='text-black' >Telegram</p></div> </a>
        </div>
      </div>
    </div>
  );
};

// Hook to manage overlay state
export const useOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return { isOpen, openOverlay, closeOverlay, OverlayContent };
};

// Example usage component (optional)
export default function OverlayExample() {
  const { isOpen, openOverlay, closeOverlay, OverlayContent } = useOverlay();

  return (
    <div className="relative">
      <button
        onClick={openOverlay}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Open Overlay
      </button>
      <OverlayContent isOpen={isOpen} onClose={closeOverlay} />
    </div>
  );
}
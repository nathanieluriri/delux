"use client";
// components/Overlay.js
import { useState } from 'react';

// Overlay component that accepts isOpen and onClose props
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
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Overlay Title</h2>
        <p className="text-gray-600">
          This is some sample text in the overlay. You can put any content here,
          like forms, images, or additional buttons.
        </p>
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
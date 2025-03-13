"use client";
// pages/index.js or any other component
import {useOverlay} from "@/components/ui/overlayComponent";

export default function Home() {
  const { isOpen, openOverlay, closeOverlay, OverlayContent } = useOverlay();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button
        onClick={openOverlay}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Overlay
      </button>
      
      <OverlayContent isOpen={isOpen} onClose={closeOverlay} />
    </div>
  );
}
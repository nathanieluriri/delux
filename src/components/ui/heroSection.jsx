"use client";
import {useOverlay} from "@/components/ui/overlayComponent";
import React, { useState } from "react";
import Link from "next/link";
export function HeroSection({signUpPage=false,url="https://wa.link/hb9d31"}) {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, openOverlay, closeOverlay, OverlayContent } = useOverlay();
  if (signUpPage==false){
    return (
      <section
      
        className="relative h-[100vh] w-screen max-w-[1600px] max-h-[660px] flex items-center justify-center justify-self-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background_for_menu_button.png')",
        }}
      >
        <OverlayContent isOpen={isOpen} onClose={closeOverlay} />
        {/* Overlay div */}
        <div className="absolute inset-0 bg-black opacity-30 bg-opacity-10"></div>
        <div className="relative text-center p-8 max-w-[800px]">
        <div className="relative justify-center hidden sm:flex" bis_skin_checked="1"><a href="#" className="w-[438.69px] h-[32px] flex items-center justify-around gap-1 border-gray-100 py-3 px-1 relative rounded-full text-sm text-gray-100 transition duration-300 ease-in-out ring-1 ring-gray-500 hover:ring-black/30"><span className="font-semibold text-sm">Announcing our next round of funding.</span><span className="font-bold  text-yellow-400 text-lg">Read more →</span></a></div>
  
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl font-sans">Delux</h1>
          <h3 className="text-center text-balance px-8 md:px-0 text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">Unleash your opulence</h3>
          <p className="mt-8 text-pretty text-gray-100 sm:text-xl/8 text-center px-6 md:px-0 max-w-5xl text-xl font-medium md:max-w-2xl mx-auto">
            DELUX enables you to monetize
            your social media accounts for yielding income. On DELUX, we ensure
            your time online is valuable. Here, we offer job opportunities and
            financial empowerment for users globally.
          </p>
          <button onClick={openOverlay} className="text-sm bg-amber-500 text-white px-6 py-2 rounded-lg duration-300 flex items-center gap-2 mt-4 m-auto hover:bg-amber-600 transition-all">
              Get Started <span className="text-lg">→</span>
            </button>
        </div>
      </section>
    );
  }
  else{
    return (
      <section
      
        className="relative h-[100vh] w-screen max-w-[1600px] max-h-[660px] flex items-center justify-center justify-self-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background_for_menu_button.png')",
        }}
      >
        <OverlayContent isOpen={isOpen} onClose={closeOverlay} />
        {/* Overlay div */}
        <div className="absolute inset-0 bg-black opacity-30 bg-opacity-10"></div>
        <div className="relative text-center p-8 max-w-[800px]">
        <div className="relative justify-center hidden sm:flex" bis_skin_checked="1"><a href="#" className="w-[438.69px] h-[32px] flex items-center justify-around gap-1 border-gray-100 py-3 px-1 relative rounded-full text-sm text-gray-100 transition duration-300 ease-in-out ring-1 ring-gray-500 hover:ring-black/30"><span className="font-semibold text-sm">Announcing our next round of funding.</span><span className="font-bold  text-yellow-400 text-lg">Read more →</span></a></div>
  
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl font-sans">Delux</h1>
          <h3 className="text-center text-balance px-8 md:px-0 text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">Unleash your opulence</h3>
          <p className="mt-8 text-pretty text-gray-100 sm:text-xl/8 text-center px-6 md:px-0 max-w-5xl text-xl font-medium md:max-w-2xl mx-auto">
            DELUX enables you to monetize
            your social media accounts for yielding income. On DELUX, we ensure
            your time online is valuable. Here, we offer job opportunities and
            financial empowerment for users globally.
          </p>
          <Link  href={'/register'} className="text-center flex items-center">
          <button className="text-sm w-4/5  bg-amber-500 text-center text-white px-6 py-2 rounded-lg duration-300 flex items-center gap-2 mt-4 m-auto hover:bg-amber-600 transition-all">
             <p className="text-center w-full"> Get Started <span className="text-lg">→</span></p>
            </button></Link>
        </div>
      </section>
    );
  }
  
}

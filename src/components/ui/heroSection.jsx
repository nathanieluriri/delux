"use client";

import React, { useState } from "react";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative h-[100vh] w-screen max-w-[1600px] max-h-[660px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/background_for_menu_button.png')",
      }}
    >
      {/* Overlay div */}
      <div className="absolute inset-0 bg-black opacity-30 bg-opacity-10"></div>
      <div className="relative text-center p-8 max-w-[800px]">
      <div className="relative justify-center hidden sm:flex" bis_skin_checked="1"><a href="#" className="w-[438.69px] h-[32px] flex items-center justify-around gap-1 border-gray-100 py-3 px-1 relative rounded-full text-sm text-gray-100 transition duration-300 ease-in-out ring-1 ring-gray-500 hover:ring-black/30"><span className="font-semibold text-sm">Announcing our next round of funding.</span><span className="font-bold text-accent text-yellow-400 text-lg">Read more →</span></a></div>

        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl font-sans">Delux</h1>
        <h3 className="text-center text-balance px-8 md:px-0 text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">Unleash your opulence</h3>
        <p className="mt-8 text-pretty text-gray-400 sm:text-xl/8 text-center px-6 md:px-0 max-w-5xl text-xl font-medium md:max-w-2xl mx-auto">
          DELUX represents elegancy, abundance and also makes one financially
          independent, inclusive, and stable. DELUX enables you to monetize
          your social media accounts for yielding income. On DELUX, we ensure
          your time online is valuable. Here, we offer job opportunities and
          financial empowerment for users globally.
        </p>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-white px-6 py-3 text-lg rounded-md transition-colors duration-300 "
          style={{
            backgroundColor: isHovered ? "transparent" : "#DCAB05",
            color: "white",
            border: "2px",
            borderColor: "white",
            
            padding: "8px 10px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Get Started <span className="text-lg" >→</span>
        </button>
      </div>
    </section>
  );
}

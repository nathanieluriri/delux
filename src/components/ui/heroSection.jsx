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
        <h1 className="text-4xl font-bold text-white mb-4">What is Delux?</h1>
        <p className="text-sm md:text-xl text-white mb-8">
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
          Get Started
        </button>
      </div>
    </section>
  );
}

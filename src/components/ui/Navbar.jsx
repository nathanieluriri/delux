'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export function MenuButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden text-white text-5xl hover:bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-15 h-15"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[rgb(74,48,22)] text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Menu</SheetTitle>
          <SheetDescription className="text-gray-300">
            Navigate through the options below.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4 px-5">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  return (
    <nav className="bg-[rgb(74,48,22)] p-4">
      <div className="max-w-screen-[1600px] mx-auto flex justify-around items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Image
            src={'/logo.png'}
            height={50}
            width={50}
            alt='Logo'
          />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* Desktop Navbar (hidden on mobile, visible on md and larger screens) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <MenuButton />
      </div>
    </nav>
  );
}
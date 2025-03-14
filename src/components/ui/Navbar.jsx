'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

import { MenuIcon } from 'lucide-react';


export function MenuButton() {
  const [open, setOpen] = useState(false);

  
  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden text-white hover:text-white text-5xl hover:bg-transparent">
          <MenuIcon size={34} height={34} width={34} />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[rgb(35,23,12)] text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Menu</SheetTitle>
          <SheetDescription className="text-gray-300">
            Navigate through the options below.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4 px-5">
          <SheetClose asChild >
            <a
              href="/"
              className="hover:underline"
            >
              Home
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a
              href="/register"
              className="hover:underline"
            >
              Register
            </a>
          </SheetClose>
          
        </div>
      </SheetContent>
    </Sheet>
  );
}
export function Navbar() {
  const [open, setOpen] = useState(false);
  const handleLinkClick = (e, href) => {
    e.preventDefault(); // Prevent default anchor behavior
    setOpen(false); // Close the sheet
    // Navigate programmatically if needed
    if (href === '/') {
      window.location.href = '/'; // Full page reload for root
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    }
  };

  return (
    <nav className="bg-[rgb(35,23,12)] p-4">
      <div className="max-w-screen-[1600px] mx-auto flex justify-around items-center">
        {/* Logo */}
        <a href="/">
        <div className="text-white text-2xl font-bold">
          <Image
            src={'/logo.png'}
            height={34}
            width={34}
            alt='Logo'
          />
        </div>
        </a>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* Desktop Navbar (hidden on mobile, visible on md and larger screens) */}
        <div className="hidden md:flex space-x-6">
          <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="text-white hover:text-gray-300">Home</a>
          <a href="#about-section" onClick={(e) => handleLinkClick(e, '#about-section')}  className="text-white hover:text-gray-300">About</a>
          <a href="#services-section"onClick={(e) => handleLinkClick(e, '#services-section')}  className="text-white hover:text-gray-300">Services</a>
          <a href="#contact-section" onClick={(e) => handleLinkClick(e, '#contact-section')} className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <MenuButton />
      </div>
    </nav>
  );
}
"use client";
import {useOverlay} from "@/components/ui/overlayComponent";
import Link from "next/link";
export function ContactSectionComponent({ signUpPage=false}) {
  const { isOpen, openOverlay, closeOverlay, OverlayContent } = useOverlay();
  if (signUpPage==false){
  return (
    <>
    <OverlayContent isOpen={isOpen} onClose={closeOverlay} />
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-center gap-0 lg:gap-14">
        <div className="md:max-w-lg xl:max-w-xl text-justify">
          <h2 className="text-3xl font-bold text-amber-400">Contact Us</h2>
          <p className="mt-4 text-gray-300">
            Our platform enables you to monetize your social media accounts for
            passive income, while our advanced earning models provide daily
            rewards, enhancing your financial potential. Join us as your home
            and pathway to financial freedom, where we empower you to embrace a
            life of abundance and opportunity.{" "}
            <span className="text-amber-800 font-bold">Contact Us Today. </span>
          </p>
        </div>
        <div className="mt-6 flex flex-nowrap gap-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="register"
            className="text-sm border border-amber-400 text-amber-400 px-2 duration-300 py-2 rounded-lg flex items-center gap-2 hover:bg-amber-400 hover:text-white transition-all"
          >
            Regsiter <span className="text-lg">→</span>
          </a>
          <button onClick={openOverlay} className="text-sm bg-amber-500 text-white px-6 py-2 rounded-lg duration-300 flex items-center gap-2 hover:bg-amber-600 transition-all">
            Get Coupon Code <span className="text-lg">🎟️</span>
          </button>
        </div>
      </div>
    </>
  );}
  else{
    return(
      <>
      <OverlayContent isOpen={isOpen} onClose={closeOverlay} />
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-center gap-0 lg:gap-14">
        <div className="md:max-w-lg xl:max-w-xl text-justify">
          <h2 className="text-3xl font-bold text-amber-400">Contact Us</h2>
          <p className="mt-4 text-gray-300">
            Our platform enables you to monetize your social media accounts for
            passive income, while our advanced earning models provide daily
            rewards, enhancing your financial potential. Join us as your home
            and pathway to financial freedom, where we empower you to embrace a
            life of abundance and opportunity.{" "}
            <span className="text-amber-800 font-bold">Contact Us Today. </span>
          </p>
        </div>
        <div className="mt-6 flex flex-nowrap w-full">
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="register"
            className="text-sm border border-amber-400 text-amber-400 px-2 duration-300 py-2 rounded-lg flex items-center gap-2 hover:bg-amber-400 hover:text-white transition-all"
          >
            Regsiter <span className="text-lg">→</span>
          </a> */}
          <Link  href="https://wa.link/hb9d31" className="text-center flex items-center w-full">
          <button className="text-sm w-full  bg-amber-500 text-center text-white px-6 py-2 rounded-lg duration-300 flex items-center gap-2 mt-4 m-auto hover:bg-amber-600 transition-all">
             <p className="text-center w-full"> Get Started <span className="text-lg">→</span></p>
            </button></Link>
        </div>
      </div>
    </>
    );
  }
}

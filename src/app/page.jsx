import Image from "next/image";

import { FeaturesGrid } from "@/components/ui/featuresSection";
import { HeroSection } from "@/components/ui/heroSection";
import { Padding } from "@/components/ui/padding";
import { AboutSection } from "@/components/ui/aboutSection";
import { ContactSectionComponent } from "@/components/ui/contactSection";
import { RankingSection } from "@/components/ui/rankingSection";
import { AdditionalInfo } from "@/components/ui/additionalInfo";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Home() {
  return (
    <>
      <HeroSection />
     
      <AboutSection />
      <FeaturesSection />
      <Padding />
      <Padding />
      <Padding />
      <ContactSection />
      <RankingSection />
      <AdditionalInfo/>
      <Padding/>
      <section className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"> Delux Ajo</h2>
            <p className="mt-6 text-pretty text-lg/8 text-gray-300">Do You Need Urgent Money to sort out a need? On Delux, You can Join Groups with fellow members to contribute weekly payments and withdraw turn by turn</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"> Get Started </a>
            
            </div>
            
          </div>
          <div className="relative mt-16 h-80 m-auto w-[300px] lg:mt-28 lg:ml-30">
            <Image
            src={"/delux_ajo.png"}
            height={300}
            width={300}
            alt="delux ajo"
            />
          </div>
        </div>
     
      </section>
    </>
  );
}

function FeaturesSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 text-left mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl p-3">
      <FeaturesGrid />
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-gray-900 text-white w-full py-20 lg:py-32 px-8 xl:px-16">
      <ContactSectionComponent />
    </section>
  );
}


"use client";
// import { FeaturesGrid } from "@/components/ui/featuresSection";
import { HeroSection } from "@/components/ui/heroSection";
// import { FootMenu } from "@/components/ui/footMenu";
// import { Padding } from "@/components/ui/padding";
import { Navbar } from "@/components/ui/Navbar";
import { useOverlay } from "@/components/ui/overlayComponent";
// import { AboutSection } from "@/components/ui/aboutSection";
import { ContactSectionComponent } from "@/components/ui/contactSection";
import { RankingSection } from "@/components/ui/rankingSection";
// import { AdditionalInfo } from "@/components/ui/additionalInfo";
import { AjoSection } from "@/components/ui/ajoSection";

export default function Home() {
  const { isOpen, openOverlay, closeOverlay, OverlayContent } = useOverlay();
  return (
    <>
      <Navbar signUpPage={true} />
      <OverlayContent isOpen={isOpen} onClose={closeOverlay} />
      <HeroSection signUpPage={true} />

      {/* <AboutSection /> */}
      {/* <div className="sm:hidden">
        <Padding />
        <Padding />
        <Padding />
        <Padding />
        <Padding />
      </div> */}
      {/* <FeaturesSection /> */}
      {/* <Padding />
      <Padding />
      <Padding /> */}
      <ContactSection  signUpPage={true} />
      <RankingSection  signUpPage={true} />
      {/* <AdditionalInfo /> */}
      {/* <Padding /> */}
      <AjoSection signUpPage={true}/>
      {/* <Padding /> */}
      {/* <FootMenu /> */}
    </>
  );
}

// function FeaturesSection() {
//   return (
//     <section
//       id="feature-section"
//       className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 text-left mx-auto max-w-2xl sm:mt-14 lg:mt-10 lg:max-w-4xl p-3"
//     >
//       <FeaturesGrid />
//     </section>
//   );
// }

function ContactSection({signUpPage=false}) {
  return (
    <section
      id="contact-section"
      className="bg-gray-900 text-white w-full py-20 lg:py-32 px-8 xl:px-16"
    >
      <ContactSectionComponent  signUpPage={signUpPage}/>
    </section>
  );
}

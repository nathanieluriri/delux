
import { FeaturesGrid } from "@/components/ui/featuresSection";
import { HeroSection } from "@/components/ui/heroSection";
import { Padding } from "@/components/ui/padding";
import { AboutSection } from "@/components/ui/aboutSection";
import { ContactSectionComponent } from "@/components/ui/contactSection";
import { RankingSection } from "@/components/ui/rankingSection";
import { AdditionalInfo } from "@/components/ui/additionalInfo";
import { AjoSection } from "@/components/ui/ajoSection";
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
      <AjoSection/>
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


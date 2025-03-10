import Image from "next/image";

import { FeaturesGrid } from "@/components/ui/featuresSection";
import { HeroSection } from "@/components/ui/heroSection";
import { Padding } from "@/components/ui/padding";
import { AboutSection } from "@/components/ui/aboutSection";
import { ContactSectionComponent } from "@/components/ui/contactSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Padding />
      <AboutSection />
      <FeaturesSection />
      <Padding />
      <ContactSection />
      <RankingSection/>
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

function RankingSection() {
  return (
    <>
      <section className="bg-[rgb(1,1,1)] relative overflow-hidden">
        {" "}
        <div className="relative mx-auto flex flex-col lg:flex-row items-center justify-between p-6">
          <div className="w-full md:w-1/2 flex justify-center rounded-full">
            <Image
              className="rounded-2xl"
              src={"/rankers_structure.jpg"}
              width={400}
              height={400}
              alt="Ranking Structure"
            />
          </div>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto xl:py-32 lg:text-left">
            {" "}
            <h2 className="text-white text-balance text-3xl font-semibold tracking-tight text-primary-text sm:text-3xl">
              {" "}
              Now, there are Various Ranks
              <br className="hidden md:block" /> for Daily Jobbers
            </h2>{" "}
            <p className="text-white max-w-[400px] mt-6 text-pretty text-lg/8 text-secondary-text">
              These ranks are meant to engage users that can't refer, and help
              them get Rewards and Qualify for various features on the website
              as they level up their ranks 📌
            </p>
            <a
              href="#"
              className="mx-auto lg:mx-0 block w-fit mt-6 px-6 py-3 bg-amber-500 transition-all duration-300 text-white  rounded-lg hover:bg-amber-700"
            >
              Learn More <span className="text-lg">→</span>
            </a>{" "}
          </div>
        </div>
      </section>
    </>
  );
}

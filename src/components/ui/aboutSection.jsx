// components/HeroSection.js
"use client";

export function AboutSection() {
  return (
   <>
    <section className=" mt-[160px] sm:mt-[10px] pt-22 md:pt-6 h-fit max-h-[550] max-w-[1600px] w-screen flex items-center justify-center  bg-cover bg-center bg-no-repeat"  style={{
        backgroundImage: "url('/background_for_about_section.png')",
      }}>
      <div className="pl-6 text-left sm:text-center font-semibold max-w-[800px]">
        <p style={{ color: "#FFB204" }} className="text-base pl-3 ">
          Earn & Learn on Delux{" "}
        </p>
        <h1 className="text-4xl font-bold text-black mb-4 pl-3">
          WHAT IS DELUX ABOUT?
        </h1>
        <p className=" text-base/7 md:text-xl text-gray-600 font-normal  p-3 mb-8">
          DELUX represents elegancy, abundance and also makes one financial
          independent, inclusive and stabilization. DELUX enables you to
          monetize your social media accounts for yielding and acquiescent
          income, on DELUX we make sure as a user your time being online and the
          value to work from your comfort zone doesn't become emancipated. Here
          we offer you the opportunity to access jobs easily, also creating
          financial liberation for everyone globally. Here we empower you,
          stabilize you financially, and make sure your financial excel
          momentously. DELUX is a universal assistant that serves her User
          continuously.
        </p>
      </div>
    </section>

   </>
  );
}

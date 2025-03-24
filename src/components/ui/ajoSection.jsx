import Image from "next/image";
export function AjoSection() {
  return <section className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 bg-black">
    <div className="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"> Delux Ajo</h2>
        <p className="mt-6 text-pretty text-lg/8 text-gray-300">Do You Need Urgent Money to sort out a need? On Delux, You can Join Groups with fellow members to contribute weekly payments and withdraw turn by turn</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="register" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"> Get Started </a>

        </div>

      </div>
      <div className="relative mt-16 h-80 m-auto w-[300px] lg:mt-28 lg:ml-30">
        <Image
          src={"/delux_ajo.png"}
          height={300}
          width={300}
          alt="delux ajo" />
      </div>
    </div>

  </section>;
}

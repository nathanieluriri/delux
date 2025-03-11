import Image from "next/image";
export function AdditionalInfo() {
  return <section className="bg-gray-100 relative overflow-hidden">
    <div className="pt-23">
      <h2 className="text-center text-base/7 font-semibold text-secondary z-20 text-[rgb(82,81,22)]">Deploy faster</h2>
      <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Everything you need to deploy your app</p>
    </div>
    <div className="mt-10 grid gap-1 sm:mt-16 lg:grid-cols-3">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 z-30 mb-32">
        <div className="bg-white  relative flex gap-5 h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <h2 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
              Mobile Friendly
            </h2>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Delux is designed for seamless mobile use. Enjoy a smooth,
              fast, and responsive experience on any device—anytime,
              anywhere
            </p>
          </div>
          <div className=" relative min-h-[30rem]  w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
            <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-amber-600 bg-black shadow-2xl">
              <Image
                src={"/tiktok.png"}
                height={300}
                width={300}
                alt="delux games flyer"
                className="size-full  object-contain object-bottom" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 z-30 mb-32">
        <div className="bg-white  relative flex gap-5 h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem] lg:rounded-r-[2rem]"></div>
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <h2 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
              Mobile Friendly
            </h2>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Delux is designed for seamless mobile use. Enjoy a smooth,
              fast, and responsive experience on any device—anytime,
              anywhere
            </p>
          </div>
          <div className=" relative min-h-[30rem]  w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
            <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-amber-600 bg-black shadow-2xl">
              <Image
                src={"/delux_games.png"}
                height={300}
                width={300}
                alt="delux games flyer"
                className="size-full  object-contain object-bottom" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 z-30 mb-32">
        <div className="bg-white  relative flex gap-5 h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-r-[2rem]"></div>
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <h2 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
              Mobile Friendly
            </h2>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Delux is designed for seamless mobile use. Enjoy a smooth,
              fast, and responsive experience on any device—anytime,
              anywhere
            </p>
          </div>
          <div className=" relative min-h-[30rem]  w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
            <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-amber-600 bg-black shadow-2xl">
              <Image
                src={"/features.png"}
                height={300}
                width={300}
                alt="delux games flyer"
                className="size-full  object-contain object-bottom " />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

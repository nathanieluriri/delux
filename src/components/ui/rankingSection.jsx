import Image from "next/image";

export function RankingSection() {
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
  
import Image from "next/image";
export function RankingSection() {
  return (
    <>
      <p style={{ color: "#FFB204" }} className="text-base">
        What Are Delux Ranks?
      </p>
      <p className="max-w-[500px] justify-center items-center justify-self-center flex m-auto text-2xl font-bold text-black mb-4">
        Now, there are Various Ranks for Daily Jobbers
      </p>
      <ol className="pl-5 space-y-2 text-xl">
        <li>1. Trainees</li>
        <li>2. Senior Trainees </li>
        <li>3. Super Trainees &</li>
        <li>4. Managers </li>
      </ol>
      <div className="justify-center justify-self-center items-center flex">
        <Image
          src={"/rankers_structure.jpg"}
          width={800}
          height={500}
          alt="Earnings"
        />
      </div>
      <p>
        Once a Daily Jobber steps up to the highest rank which is Manager Rank,
        they can start withdrawing every month from their daily job Earnings 
      </p>
      
    </>
  );
}

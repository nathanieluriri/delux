import Image from "next/image";
import { CloudUpload } from "lucide-react";
import { Lock } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

export function FeaturesGrid() {
  return (
    <>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <FaTiktok color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">TikTok Monetisation 👇🏽👇🏽</p>
          <p className="text-base/7 text-gray-600 ">
            On Delux, our users can earn extra income from engaging on our
            content and reposting it on TikTok. After reposting, users can
            screenshot and attach their social media handles to gain access to
            regular payments and lots of rewards for Social Media engagement....
            In this way, users can earn up to 100 euros in a week
            from their TikTok.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <Lock color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Delux Ajo feature 👇🏽👇🏽 </p>
          <p className="text-base/7 text-gray-600 ">
            Need urgent money to sort out a need?? Delux got you covered 💯.
            Users on Delux, can join small groups with fellow members,
            contribute weekly amounts from daily job earnings, and withdraw the
            amounts contributed, turn by turn... Delux helps you & your finances
            in EVERY single way 📌
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <RefreshCcw color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Delux AI Feature 👇🏽👇🏽</p>
          <p className="text-base/7 text-gray-600 ">
            This is the amazing Feature on Delux that makes your work as a
            Coach/influencer easy 🌝. From answering any questions or confusions
            new users have, to chatting for assistance, to even helping out in
            doing daily jobs, Delux AI is the perfect Assistant.... On Delux, we
            embrace innovation and smart work 🧡
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <Clapperboard color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Manus Earnings Feature 👇🏽👇🏽</p>
          <p className="text-base/7 text-gray-600 ">
            On Delux, we reward consistent Coaches who duplicate their effort in
            their team members. As you create more millionaires in your downline
            team, you earn extra cash for your effort, and also qualify for
            various incentives 🎉🎉 Diverge Into Millions With Delux 
          </p>
        </div>
      </div>

     

      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <Clapperboard color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">TikTok Monetisation 👇🏽👇🏽</p>
          <p className="text-base/7 text-gray-600 ">
            On Delux, our users can earn extra income from engaging on our
            content and reposting it on TikTok. After reposting, users can
            screenshot and attach their social media handles to gain access to
            regular payments and lots of rewards for Social Media engagement....
            In this way, users can earn up to 100 euros in a week
            from their TikTok.
          </p>
        </div>
      </div>


      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <Clapperboard color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Delux Movie Clips Feature 👇🏽👇🏽</p>
          <p className="text-base/7 text-gray-600 ">
            This is an amazing Feature on Delux, where users can take a break
            from their daily Delux jobs, to watch short movie clips and earn in
            Euros. There would be multiple Delux clips for uses to watch, engage
            and share, during their free time to earn extra cash daily. Earnings
            from Delux clips are added up, and can be withdrawn regularly.... ON
            DELUX, YOU DON'T JUST EARN, YOU HAVE FUN WHILE DOING IT!!!
          </p>
        </div>
      </div>
    </>
  );
}

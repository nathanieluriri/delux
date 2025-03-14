import Image from "next/image";
import { CloudUpload } from "lucide-react";
import { Lock } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import { Clapperboard } from "lucide-react";
export function FeaturesGrid() {
  return (
    <>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <CloudUpload color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Skill Acquisition</p>
          <p className="text-base/7 text-gray-600 ">
            Delux isn’t just about earning; it’s also about learning. Our
            platform offers users access to expert-led courses in various areas
            of the digital world, helping you develop new skills and unlock your
            smartphone’s full potential.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <Lock color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Quick Loans</p>
          <p className="text-base/7 text-gray-600 ">
            With Delux Loan, users can request a loan without needing any
            collateral and at a very fair interest rate. This feature is
            available to all Delux users and is designed to help small business
            owners grow by providing quick financial support.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <RefreshCcw color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Social Media Monetization</p>
          <p className="text-base/7 text-gray-600 ">
            Delux allows users to monetize their social media accounts
            effortlessly. By connecting your Instagram or TikTok account to
            Delux, you can create videos showcasing Delux and its features.
            Simply use our official hashtags and tag us in your posts.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <Clapperboard color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Delux Movies & Clips</p>
          <p className="text-base/7 text-gray-600 ">
            Watch Delux Movies & Clips daily to earn rewards. Each movie or clip
            you watch earns you a payout, which is added to your affiliate
            balance. New content is posted every day, giving you consistent
            chances to boost your earnings just by enjoying great films and
            videos.
          </p>
        </div>
      </div>
    </>
  );
}

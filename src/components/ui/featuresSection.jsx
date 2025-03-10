import Image from "next/image";
import { CloudUpload } from "lucide-react";
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
            Phenom isn’t just about earning; it’s also about learning. Our
            platform offers users access to expert-led courses in various areas
            of the digital world, helping you develop new skills and unlock your
            smartphone’s full potential.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <CloudUpload color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Skill Acquisition</p>
          <p className="text-base/7 text-gray-600 ">
            Phenom isn’t just about earning; it’s also about learning. Our
            platform offers users access to expert-led courses in various areas
            of the digital world, helping you develop new skills and unlock your
            smartphone’s full potential.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <CloudUpload color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Skill Acquisition</p>
          <p className="text-base/7 text-gray-600 ">
            Phenom isn’t just about earning; it’s also about learning. Our
            platform offers users access to expert-led courses in various areas
            of the digital world, helping you develop new skills and unlock your
            smartphone’s full potential.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4 mt-10">
        <div className=" bg-amber-300 p-3 rounded-full">
          <CloudUpload color="white" />
        </div>
        <div className="flex-col flex gap-2">
          <p className="font-bold text-lg">Skill Acquisition</p>
          <p className="text-base/7 text-gray-600 ">
            Phenom isn’t just about earning; it’s also about learning. Our
            platform offers users access to expert-led courses in various areas
            of the digital world, helping you develop new skills and unlock your
            smartphone’s full potential.
          </p>
        </div>
      </div>
    </>
  );
}

import { assets } from "@/assets/assets";
import React from "react";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br />
        image in seconds
      </h1>
      <div className="flex items-center flex-wrap gap-5 mt-16 xl:mt-24 justify-center">
        <div className="flex items-center gap-4 bg-white border drop-shadow-md p-5 rounded-xl hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon} alt="" />
          <p className="text-xl font-medium">Upload image</p>
        </div>
        <div className="flex items-center gap-4 bg-white border drop-shadow-md p-5 rounded-xl hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.remove_bg_icon} alt="remove_bg_icon" />
          <p className="text-xl font-medium">Remove background</p>
        </div>
        <div className="flex items-center gap-4 bg-white border drop-shadow-md p-5 rounded-xl hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.download_icon} alt="download_icon" />
          <p className="text-xl font-medium">Download image</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;

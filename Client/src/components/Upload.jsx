import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { assets } from "@/assets/assets";

const Upload = () => {
  return (
    <div className="pb-16">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5 md:py-16">
        See the magic. Try now
      </h1>
      <div className="text-center mb-24">
          <Input id="picture2" type="file" className="hidden" />
          <Label
            className="inline-flex gap-3 px-8 py-3.5 rounded-full  cursor-pointer bg-gradient-to-r from-blue-800 to-blue-400 m-auto hover:scale-105 transition-all duration-700"
            htmlFor="picture2"
          >
            <img
              width={20}
              src={assets.upload_btn_icon}
              alt="upload_btn_icon"
            />
            <p className="text-white text-sm">Upload your image</p>
          </Label>
        </div>
    </div>
  );
};

export default Upload;

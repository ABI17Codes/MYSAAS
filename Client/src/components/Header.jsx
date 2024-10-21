import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* Left side */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br  className="max-md:hidden"  /> images for free.
        </h1>
        <div className="grid w-full max-w-sm items-center justify-center gap-1.5 mt-6">
          <Input id="picture" type="file" className="hidden" />
          <Label
            className="inline-flex gap-3 px-8 py-3.5 rounded-full  cursor-pointer bg-gradient-to-r from-blue-800 to-blue-400 m-auto hover:scale-105 transition-all duration-700"
            htmlFor="picture"
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
      {/* Right side */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;

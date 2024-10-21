import { assets } from "@/assets/assets";
// import { Copyright } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      <Link to="/">
        <img width={150} src={assets.logo} alt="logo" />
      </Link>
      <p className="flex-1 border-1 border-gray-400 pl-3 text-sm text-gray-500 max-sm:hidden">
      {/* <Copyright /> */}
        Copyright | All right reserved.
      </p>
      <div className="flex items-center gap-1">
        <img width={40} src={assets.facebook_icon} alt="facebook_icon" />
        <img width={40} src={assets.twitter_icon} alt="twitter_icon" />
        {/* <img width={40} src={assets.facebook_icon} alt="facebook_icon" /> */}
      </div>
    </div>
  );
};

export default Footer;

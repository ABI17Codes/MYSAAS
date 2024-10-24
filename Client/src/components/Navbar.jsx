import { assets } from "@/assets/assets";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-44" src={assets.logo} alt="logo" />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton/>
        </div>
      ) : (
        <Button
          onClick={() => openSignIn({})}
          className="rounded-full bg-blue-700 hover:bg-blue-700/90"
        >
          Get Started{" "}
          <img
            className="w-3 sm:w-4"
            src={assets.arrow_icon}
            alt="arrow_icon"
          />
        </Button>
      )}
    </div>
  );
};

export default Navbar;

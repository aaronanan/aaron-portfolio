import React from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const navItems = ["Home", "About Me", "Projects", "Contact"];
  return (
    <div className="flex flex-row justify-between text-xl py-5 uppercase pt-10 items-center">
      <div className="relative select-none cursor-pointer">
        <h1
          className="text-6xl text-white relative z-50 font-bold"
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          AA
        </h1>
        <div className="w-28 h-3 bg-gold absolute top-7 left-1/2 transform -translate-x-1/2 z-0 opacity-80"></div>
      </div>
      <div className="flex-row hidden md:flex items-center">
        {navItems.map((nav, index) => (
          <a
            key={index}
            className="ml-10 text-white font-bold"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            {nav}
          </a>
        ))}
        <input
          type="button"
          value="Resume"
          className="w-36 h-10 ml-10 rounded-xl font-bold uppercase"
          style={{
            color: "rgba(0, 0, 0, 0.7)",
            backgroundColor: "rgba(254, 197, 118, 0.80)",
            // color: "white",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        />
      </div>
      <div className="block md:hidden">
        <HiOutlineMenuAlt3 color="white" size={40} />
      </div>
    </div>
  );
};

export default Navbar;

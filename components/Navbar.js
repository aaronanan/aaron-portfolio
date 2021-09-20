import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const navItems = [
    { text: "Home", link: "home" },
    { text: "About Me", link: "aboutme" },
    { text: "Projects", link: "projects" },
    { text: "Contact", link: "contact" },
  ];

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="relative">
      <div className="flex flex-row justify-between text-xl py-5 uppercase lg:pt-10 md:pt-8 sm:pt-6 pt-4 items-center 2xl:mx-60 xl:mx-40 lg:mx-24 md:mx-12 mx-6">
        <div className="relative select-none md:ml-0 ml-4">
          <h1
            className="lg:text-6xl text-5xl text-white relative z-50 font-bold"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            // onClick={() => location.reload()}
          >
            AA
          </h1>
          <div className="lg:w-28 lg:h-3 sm:w-22 w-20 h-2 bg-gold absolute lg:top-8 top-7 left-1/2 transform -translate-x-1/2 z-0 opacity-80"></div>
        </div>
        <div className="flex-row hidden md:flex items-center lg:space-x-10 space-x-5">
          {navItems.map((nav, index) => (
            <Link
              key={index}
              className="text-white font-bold 2xl:text-xl xl:text-lg lg:text-base text-sm border-b-2 hover:border-gold border-transparent"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              activeClass="active"
              to={nav.link}
              spy={true}
              smooth={true}
              duration={500}
            >
              {nav.text}
            </Link>
          ))}
          <input
            type="button"
            value="Resume"
            className="lg:w-36 w-28 lg:h-10 h-9 lg:ml-10 ml-5 rounded-xl font-bold uppercase 2xl:text-xl xl:text-lg lg:text-base text-sm"
            style={{
              color: "rgba(0, 0, 0, 0.7)",
              backgroundColor: "rgba(254, 197, 118, 0.80)",
              // color: "white",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>
        <div className="block md:hidden z-50">
          {!toggleMenu ? (
            <HiOutlineMenuAlt3
              color="white"
              size={40}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          ) : (
            <HiOutlineX
              color="white"
              size={40}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className="w-48 h-80 bg-bgBlueLight border-gold border-2 absolute right-0 top-0 z-0 md:hidden block">
          <div className="flex flex-col items-center space-y-5 mt-20">
            {navItems.map((nav, index) => (
              <Link
                key={index}
                className="text-white font-bold text-sm border-b-2 hover:border-gold border-transparent"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                activeClass="active"
                to={nav.link}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                {nav.text}
              </Link>
            ))}
            <input
              type="button"
              value="Resume"
              className="w-28 h-9 rounded-xl font-bold uppercase text-sm"
              style={{
                color: "rgba(0, 0, 0, 0.7)",
                backgroundColor: "rgba(254, 197, 118, 0.80)",
                // color: "white",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

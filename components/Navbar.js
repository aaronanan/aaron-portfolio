import React from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const navItems = [
    { text: "Home", link: "home" },
    { text: "About Me", link: "aboutme" },
    { text: "Projects", link: "projects" },
    { text: "Contact", link: "contact" },
  ];
  return (
    <div className="flex flex-row justify-between text-xl py-5 uppercase lg:pt-10 md:pt-8 sm:pt-6 pt-4 items-center">
      <div className="relative select-none md:ml-0 ml-4">
        <h1
          className="lg:text-6xl text-5xl text-white relative z-50 font-bold"
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          // onClick={() => location.reload()}
        >
          AA
        </h1>
        <div className="lg:w-28 lg:h-3 w-24 h-2 bg-gold absolute top-7 left-1/2 transform -translate-x-1/2 z-0 opacity-80"></div>
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
        {/* <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          duration={500}
        >
          Test 1
        </Link> */}
      </div>
      <div className="block md:hidden">
        <HiOutlineMenuAlt3 color="white" size={40} />
      </div>
    </div>
  );
};

export default Navbar;

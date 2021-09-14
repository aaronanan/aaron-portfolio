import React from "react";

const Navbar = () => {
  const navItems = ["Home", "About Me", "Projects", "Contact"];
  return (
    <div className="flex flex-row justify-between text-xl py-5 uppercase pt-10">
      <h1>Logo</h1>
      <div className="flex-row flex">
        {navItems.map((nav, index) => (
          <p key={index} className="ml-10">
            {nav}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

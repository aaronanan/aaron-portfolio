import React from "react";
import Image from "next/image";
import LayeredWave from "../assets/layered-waves.svg";
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="">
      <h3 className="text-5xl text-center uppercase text-bgBlue font-bold">
        <span className="text-gold">C</span>ontact
      </h3>
      <p className="w-2/5 mx-auto text-center text-2xl mt-8 text-bgBlue font-semibold">
        I love to chat about new opportunities as well as my past and current
        work! Feel free to message me on LinkedIn or send me an email.
      </p>
      <div className="flex-row flex justify-center items-center mt-7 space-x-8">
        <IoLogoLinkedin size={45} color="rgb(37, 89, 119)" />
        <IoLogoGithub size={45} color="rgb(37, 89, 119)" />
        <IoMailOutline size={45} color="rgb(37, 89, 119)" />
      </div>
      {/* <Image src={LayeredWave} width={500} height={200} /> */}
    </div>
  );
};

export default Contact;

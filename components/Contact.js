import React from "react";
import Image from "next/image";
import LayeredWave from "../assets/layered-waves.svg";
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="mt-14 sm:mb-0 mb-20" name="contact">
      <h3 className="lg:text-5xl md:text-4xl text-3xl text-center uppercase text-bgBlue font-bold">
        <span className="text-gold">C</span>ontact
      </h3>
      <p className="xl:w-2/5 lg:w-3/5 w-4/5 mx-auto text-center md:text-2xl sm:text-xl mt-8 text-bgBlue font-semibold">
        I love to chat about new opportunities as well as my past and current
        work! Feel free to message me on LinkedIn or send me an email.
      </p>
      <div className="flex-row flex justify-center items-center mt-7 space-x-8 relative z-50">
        <a
          href="https://www.linkedin.com/in/harish-anantharajah/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin size={45} color="rgb(37, 89, 119)" />
        </a>
        <a
          href="https://github.com/harishanan"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub size={45} color="rgb(37, 89, 119)" />
        </a>
        <a href="mailto: aaronananh@gmail.com" target="_blank" rel="noreferrer">
          <IoMailOutline size={45} color="rgb(37, 89, 119)" />
        </a>
      </div>
      {/* <Image src={LayeredWave} width={500} height={200} /> */}
    </div>
  );
};

export default Contact;

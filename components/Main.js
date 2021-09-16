//Packages
import React from "react";
import Image from "next/image";

//Components
import Navbar from "./Navbar";

//Images
import Aaron from "../assets/avataaars.svg";

const Main = () => {
  return (
    <div className="bg-bgBlue">
      <div className="2xl:mx-60 xl:mx-40 lg:mx-24 md:mx-12 mx-6">
        <Navbar />
        <div className="flex md:flex-row flex-col justify-between items-center py-20 mt-10">
          <div className="uppercase md:text-left text-center">
            <p className="lg:text-2xl text-xl text-gold font-medium">
              Hi there, I'm
            </p>
            <h1 className="lg:text-6xl sm:text-5xl text-4xl text-white font-bold mt-5">
              Aaron <br />
              Anantharajah
            </h1>
            <h2 className="lg:text-3xl text-2xl text-gold font-bold mt-5">
              Full-Stack Web Developer
            </h2>
          </div>
          <div className="block md:hidden">
            <Image
              src={Aaron}
              draggable="false"
              alt="Aaron Picture"
              width={300}
              height={380}
            />
          </div>
          <div className="hidden md:block">
            <Image
              src={Aaron}
              draggable="false"
              alt="Aaron Picture"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="rotate-180 transform translate-y-1"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,64L24,106.7C48,149,96,235,144,224C192,213,240,107,288,74.7C336,43,384,85,432,128C480,171,528,213,576,234.7C624,256,672,256,720,234.7C768,213,816,171,864,144C912,117,960,107,1008,122.7C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Main;

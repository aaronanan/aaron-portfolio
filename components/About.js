import React, { useState, useEffect } from "react";
import Image from "next/image";

//Images
import Circle from "../assets/Circle.cfb88f07.svg";
import HTMLIcon from "../assets/Html5Icon.700ce76a.svg";
import CSSIcon from "../assets/Css3Icon.067863de.svg";
import TailwindCSS from "../assets/tailwind-css-2.svg";
import Javascript from "../assets/javascriptLogo.fc406b47.svg";
import Python from "../assets/python-5.svg";
import Node from "../assets/nodejs-icon.svg";
import ReactIcon from "../assets/reactLogo.30b5dc77.svg";
import NextJS from "../assets/next-js.svg";
import AWSIcon from "../assets/aws-2.svg";
import ReactNative from "../assets/react-native-1.svg";

const ImageSizer = (img, alt, xl = 0, lg = 0, md = 0, sm = 0) => {
  return (
    <>
      <div className="lg:block hidden">
        <Image src={img} width={xl} height={xl} draggable={false} alt={alt} />
      </div>
      <div className="md:block lg:hidden hidden">
        <Image src={img} width={lg} height={lg} draggable={false} alt={alt} />
      </div>
      <div className="sm:block md:hidden hidden">
        <Image src={img} width={md} height={md} draggable={false} alt={alt} />
      </div>
      <div className="block sm:hidden">
        <Image src={img} width={sm} height={sm} draggable={false} alt={alt} />
      </div>
    </>
  );
};

const About = () => {
  const skillsIcon = [
    HTMLIcon,
    CSSIcon,
    TailwindCSS,
    Javascript,
    Python,
    Node,
    ReactIcon,
    NextJS,
    AWSIcon,
    ReactNative,
  ];

  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  var skillsRow1;
  var skillsRow2;
  width > 640
    ? (skillsRow1 = ["HTML", "CSS", "TailwindCSS", "Javascript", "Python"])
    : (skillsRow1 = ["HTML", "CSS", "Tailwind", "Javascript", "Python"]);
  width > 640
    ? (skillsRow2 = ["Node", "React", "NextJS", "AWS", "React Native"])
    : (skillsRow2 = ["Node", "React", "NextJS", "AWS", "R-Native"]);

  return (
    <div>
      <div className="mb-20 mt-10">
        <h3 className="text-center lg:text-5xl sm:text-4xl text-3xl uppercase font-bold text-bgBlue">
          About <span className="text-gold">Me</span>
        </h3>
        <p className="2xl:w-3/5 md:w-3/4 lg:text-2xl sm:text-xl text-base mx-5 md:mx-auto sm:mt-10 mt-5 text-bgBlue font-medium text-center">
          Hello! My name is Aaron and I am a full-stack developer based in
          Vancouver, Canada. I have 5+ years of experience developing various
          projects and products for companies with focus on fast, elegant and
          accessible user experiences. When I am not coding or learning new
          technologies I enjoy playing basketball, hiking and spending quality
          time with family.
        </p>
        <div className="flex flex-row flex-wrap justify-center lg:mt-20 sm:mt-12 mt-4 2xl:space-x-20 xl:space-x-18 lg:space-x-16 md:space-x-10 sm:space-x-6 space-x-4">
          {skillsRow1.map((skill, index) => (
            <div key={index} className="relative">
              {ImageSizer(Circle, "circle", 110, 100, 90, 56)}
              <div className="absolute sm:left-6 sm:top-7 sm:pt-0 top-3 pt-0.5 left-3 pl-0.5">
                {ImageSizer(skillsIcon[index], skill, 60, 50, 40, 30)}
              </div>
              <p className="text-center xl:text-lg lg:text-base sm:text-sm text-xxs sm:mt-1 -mt-0 uppercase font-semibold">
                {skill}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-center lg:mt-10 md:mt-8 sm:mt-6 mt-5 2xl:space-x-20 xl:space-x-18 lg:space-x-16 md:space-x-10 sm:space-x-6 space-x-4">
          {skillsRow2.map((skill, index) => (
            <div key={index} className="relative">
              {ImageSizer(Circle, "Circle", 110, 100, 90, 56)}
              <div className="absolute sm:left-6 sm:top-7 sm:pt-0 top-3 pt-0.5 left-3 pl-0.5">
                {ImageSizer(skillsIcon[index + 5], skill, 60, 50, 40, 30)}
              </div>
              <p className="text-center xl:text-lg lg:text-base sm:text-sm text-xxs sm:mt-1 -mt-0 uppercase font-semibold">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="transform rotate-180 translate-y-1"
        // style={{ transform: "scaleX(-1) rotate(180deg)" }}
      >
        <path
          fill="#255977"
          fillOpacity="1"
          d="M0,64L24,106.7C48,149,96,235,144,224C192,213,240,107,288,74.7C336,43,384,85,432,128C480,171,528,213,576,234.7C624,256,672,256,720,234.7C768,213,816,171,864,144C912,117,960,107,1008,122.7C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default About;

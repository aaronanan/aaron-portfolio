import React from "react";
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

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "TailwindCSS",
    "Javascript",
    "Python",
    "Node",
    "React",
    "NextJS",
    "AWS",
    "React Native",
  ];

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

  return (
    <div>
      <div className="mx-44">
        <h3 className="text-center text-5xl uppercase">About Me</h3>
        <p className="w-1/2 text-2xl mx-auto mt-10">
          Hello! My name is Aaron and I am a full-stack developer based in
          Vancouver, Canada. I have 5+ years of experience developing various
          projects and products for companies with focus on fast, elegant and
          accessible user experiences. When I am not coding or learning new
          technologies I enjoy playing basketball, hiking and spending quality
          time with family.
        </p>
        <div className="flex flex-row flex-wrap w-2/3 justify-between mt-20 mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mx-10 mb-12 relative">
              <Image src={Circle} width={110} draggable={false} alt="cricle" />
              <div className="absolute left-6 top-9 pl-0.5">
                <Image
                  src={skillsIcon[index]}
                  width={60}
                  height={60}
                  draggable={false}
                  alt={skill}
                />
              </div>
              <p className="text-center text-xl -mt-3">{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="transform rotate-180"
      >
        <path
          fill="#9CA3AF"
          fillOpacity="1"
          d="M0,64L24,106.7C48,149,96,235,144,224C192,213,240,107,288,74.7C336,43,384,85,432,128C480,171,528,213,576,234.7C624,256,672,256,720,234.7C768,213,816,171,864,144C912,117,960,107,1008,122.7C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default About;

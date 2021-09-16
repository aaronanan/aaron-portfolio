import React, { useEffect, useState } from "react";
import Image from "next/image";

//Images
import MovieCloud from "../assets/moviecloud.png";
import BuiltSpace from "../assets/builtspace.png";
import CryptoCoin1 from "../assets/cryptocoin.jpg";
import CryptoCoin2 from "../assets/cryptocoin2.jpg";
import Dansljardin from "../assets/dansljardin.png";

//Icons
import { IoCodeSlash, IoEye } from "react-icons/io5";

const Projects = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  });

  const BottomButtons = () => {
    return (
      <div className="flex flex-row mt-6 xl:space-x-10 md:space-x-8 space-x-4">
        <button className="xl:w-40 md:w-36 sm:w-32 xl:h-12 md:h-10 sm:h-8 xl:text-lg lg:text-md md:text-sm text-xs bg-gold rounded-xl font-bold flex flex-row items-center justify-center uppercase">
          <IoEye size={width > 768 ? 24 : 20} className="mr-1" />
          Demo
        </button>
        <button className="xl:w-40 md:w-36 sm:w-32 xl:h-12 md:h-10 sm:h-8 xl:text-lg lg:text-md md:text-sm text-xs rounded-xl font-bold flex flex-row items-center justify-center bg-white uppercase">
          <IoCodeSlash size={width > 768 ? 24 : 20} className="mr-1" />
          Code
        </button>
      </div>
    );
  };

  const projectsInfo = [
    {
      name: "Movie Cloud",
      desc: "A web application that allows you to search for movies updated using an existing API. It displays the latest movies alongside a description, catergory and rating.",
      flip: true,
      image: [MovieCloud],
      width: 300,
      height: width > 1280 ? 510 : width > 1024 ? 410 : 370,
    },
    {
      name: "Dans L'Jardin",
      desc: "A full-stack web application that connects clients with local musicans. Musicians can register by filling out a survey and sending a demo tape of their perferred instrument. Once registered, an admin decides to allow or reject the musican. Clients can then book amusician to play live music!",
      flip: true,
      image: [Dansljardin],
      width: 500,
      height: 330,
    },
    {
      name: "Crypto Coin App",
      desc: "A react native application that displays the latest prices and trends of coins. In this app, you are able to buy and sell coins as a means to replicate the coin market.",
      flip: true,
      image: [CryptoCoin1, CryptoCoin2],
      width: 200,
      height: 540,
    },
    {
      name: "Builtspace",
      desc: "An industry sponsored project which took their manual process of inserting excel sheet data and converting it into a web application to accelerate their business process.",
      flip: true,
      image: [BuiltSpace],
      width: 420,
      height: 360,
    },
  ];

  return (
    <div className="bg-bgBlue -mt-2">
      <h3 className="lg:text-5xl md:text-4xl text-2xl text-center uppercase font-bold text-white">
        <span className="text-gold">P</span>rojects
      </h3>
      {projectsInfo.map((project, index) => (
        <div className="">
          <div className="flex flex-row items-center justify-center mt-20 lg:space-x-20 md:space-x-7 space-x-5">
            {project.image.length == 1 ? (
              <Image
                src={project.image[0]}
                width={
                  width >= 1536
                    ? 500
                    : width >= 1280
                    ? 420
                    : width >= 768
                    ? 320
                    : width > 0 && 250
                }
                height={
                  width >= 1536
                    ? project.height
                    : width >= 1280
                    ? project.height - 30
                    : width >= 768
                    ? project.height - 40
                    : width > 0 && project.height - 120
                }
                quality={30}
                onClick={() => console.log(width)}
              />
            ) : (
              // MORE THAN ONE PICTURE
              <div className="flex-row flex">
                <div className="mr-2">
                  <Image
                    src={project.image[0]}
                    quality={30}
                    width={
                      width >= 1536
                        ? 245
                        : width >= 1280
                        ? 205
                        : width >= 768
                        ? 155
                        : width > 0 && 120
                    }
                    height={
                      width >= 1536
                        ? project.height
                        : width >= 1280
                        ? project.height - 120
                        : width >= 768
                        ? project.height - 150
                        : width > 0 && project.height - 260
                    }
                  />
                </div>
                <div>
                  <Image
                    src={project.image[1]}
                    quality={30}
                    width={
                      width >= 1536
                        ? 245
                        : width >= 1280
                        ? 205
                        : width >= 768
                        ? 155
                        : width > 0 && 120
                    }
                    height={
                      width >= 1536
                        ? project.height
                        : width >= 1280
                        ? project.height - 120
                        : width >= 768
                        ? project.height - 150
                        : width > 0 && project.height - 260
                    }
                  />
                </div>
              </div>
            )}
            <div className="lg:w-1/3 w-1/2">
              <h4 className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl uppercase text-white font-bold">
                {project.name}
              </h4>
              <p className="2xl:text-xl xl:text-lg lg:text-md text-white mt-5">
                {project.desc}
              </p>
              <BottomButtons />
            </div>
          </div>
        </div>
      ))}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 321"
        className="transform rotate-180 translate-y-1"
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

export default Projects;

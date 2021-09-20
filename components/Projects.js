import React, { useEffect, useState } from "react";
import Image from "next/image";

//Images
import MovieCloud from "../assets/demos/moviecloud-min.png";
import BuiltSpace from "../assets/demos/builtspace-min.png";
import CryptoCoin1 from "../assets/demos/cryptocoin-min.png";
import CryptoCoin2 from "../assets/demos/cryptocoin2-min.png";
import Dansljardin from "../assets/demos/dansljardin-min.png";

//Icons
import { IoCodeSlash, IoEye } from "react-icons/io5";

const ImageSizer = (img, alt, xxlw, xlw, lgw, mdw, xxlh, xlh, lgh, mdh) => {
  return (
    <>
      <div className="xl:block hidden">
        <Image
          src={img}
          width={xxlw}
          height={xxlh}
          draggable={false}
          quality={30}
          alt={alt}
        />
      </div>
      <div className="lg:block hidden xl:hidden">
        <Image
          src={img}
          width={xlw}
          height={xlh}
          draggable={false}
          alt={alt}
          quality={30}
        />
      </div>
      <div className="md:block lg:hidden hidden">
        <Image
          src={img}
          width={lgw}
          height={lgh}
          draggable={false}
          alt={alt}
          quality={30}
        />
      </div>
      <div className="sm:block md:hidden hidden">
        <Image
          src={img}
          width={mdw}
          height={mdh}
          draggable={false}
          alt={alt}
          quality={30}
        />
      </div>
      <div className="block sm:hidden">
        <Image
          src={img}
          width={mdw}
          height={mdh}
          draggable={false}
          alt={alt}
          quality={30}
        />
      </div>
    </>
  );
};

const Projects = () => {
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

  const BottomButtons = ({ demo, github }) => {
    return (
      <div className="flex flex-row md:justify-start justify-center mt-6 xl:space-x-10 md:space-x-8 space-x-4">
        <a href={demo} target="_blank" rel="noreferrer">
          <button className="hover:opacity-80 xl:w-40 md:w-36 sm:w-32 xl:h-12 md:h-10 sm:h-8 w-28 h-9 xl:text-lg lg:text-md md:text-sm text-xs bg-gold rounded-xl font-bold flex flex-row items-center justify-center uppercase">
            <IoEye size={width > 768 ? 24 : 20} className="mr-1" />
            Demo
          </button>
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <button className="hover:opacity-80 xl:w-40 md:w-36 sm:w-32 xl:h-12 md:h-10 sm:h-8 w-28 h-9 xl:text-lg lg:text-md md:text-sm text-xs rounded-xl font-bold flex flex-row items-center justify-center bg-white uppercase">
            <IoCodeSlash size={width > 768 ? 24 : 20} className="mr-1" />
            Code
          </button>
        </a>
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
      alt: "A Web App called Movie Cloud",
      demo: "https://movie-cloud-app.netlify.app/",
      github: "https://github.com/harishanan/movie-cloud",
    },
    {
      name: "Dans L'Jardin",
      desc: "A full-stack web application that connects clients with local musicans. Musicians can register by filling out a survey and sending a demo tape of their perferred instrument. Once registered, an admin decides to allow or reject the musican. Clients can then book amusician to play live music!",
      flip: true,
      image: [Dansljardin],
      width: 500,
      height: 330,
      alt: "A Full-Stack App called Dans L'Jardin",
      demo: "https://dansljardin.herokuapp.com/",
      github: "https://github.com/harishanan/dansl-jardin",
    },
    {
      name: "Crypto Coin App",
      desc: "A react native application that displays the latest prices and trends of coins. In this app, you are able to buy and sell coins as a means to replicate the coin market.",
      flip: true,
      image: [CryptoCoin1, CryptoCoin2],
      width: 200,
      height: 540,
      alt: "A React Native App That Tracks Coin Prices",
      demo: "https://github.com/harishanan/cryptocoin-native-app",
      github: "https://github.com/harishanan/cryptocoin-native-app",
    },
    {
      name: "Builtspace",
      desc: "An industry sponsored project which took their manual process of inserting excel sheet data and converting it into a web application to accelerate their business process.",
      flip: true,
      image: [BuiltSpace],
      width: 420,
      height: 360,
      alt: "A React App That Automates Tasks",
      demo: "https://master.dltoyxtyfco24.amplifyapp.com/#/",
      github: "https://github.com/harishanan/builtspace",
    },
  ];

  return (
    <div className="bg-bgBlue pt-14" name="projects">
      <h3 className="lg:text-5xl md:text-4xl text-3xl text-center uppercase font-bold text-white">
        <span className="text-gold">P</span>rojects
      </h3>
      {projectsInfo.map((project, index) => (
        <div
          key={index}
          className="flex md:flex-row flex-col items-center justify-center mt-0"
        >
          {project.image.length == 1 ? (
            <>
              {ImageSizer(
                project.image[0],
                project.alt,
                //WIDTH
                600,
                450,
                350,
                300,
                // HEIGHT
                650,
                500,
                400,
                350
              )}
              {/* <Image
                src={Dansljardin}
                alt={project.alt}
                quality={30}
                className="object-cover"
              /> */}
              {/* <Image
                src={project.image[0]}
                alt={project.alt}
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
              /> */}
              {/* <Image
                src={project.image[0]}
                alt={project.alt}
                width={500}
                height={project.height}
                quality={30}
                className="transform 2xl:scale-100 xl:scale-90 lg:scale-75 md:scale-50 sm:scale-50"
              /> */}
            </>
          ) : (
            // MORE THAN ONE PICTURE
            <div className="flex-row flex md:mb-0 mb-20 md:mt-0 mt-16">
              <div className="md:mr-2">
                {ImageSizer(
                  project.image[0],
                  project.alt,
                  //WIDTH
                  300,
                  225,
                  175,
                  150,
                  // HEIGHT
                  600,
                  450,
                  350,
                  300
                )}
                {/* <Image
                  src={project.image[0]}
                  quality={30}
                  alt={project.alt}
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
                /> */}
              </div>

              <div>
                {ImageSizer(
                  project.image[1],
                  project.alt,
                  //WIDTH
                  300,
                  225,
                  175,
                  150,
                  // HEIGHT
                  600,
                  450,
                  350,
                  300
                )}
                {/* <Image
                  src={project.image[1]}
                  quality={30}
                  alt={project.alt}
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
                /> */}
              </div>
            </div>
          )}
          <div className="lg:w-1/3 sm:w-1/2 w-4/5 md:ml-10 -mt-10 md:mt-0">
            <h4 className="2xl:text-4xl xl:text-3xl text-2xl uppercase text-white font-bold md:text-left text-center">
              {project.name}
            </h4>
            <p className="2xl:text-xl xl:text-lg lg:text-md text-white mt-5 md:text-left text-center">
              {project.desc}
            </p>
            <BottomButtons demo={project.demo} github={project.github} />
          </div>
        </div>
      ))}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 321"
        className="transform rotate-180 translate-y-1 md:mt-0 mt-20"
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

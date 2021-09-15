import React from "react";
import Image from "next/image";

//Images
import MovieCloud from "../assets/moviecloud.png";
import BuiltSpace from "../assets/builtspace.png";
import CryptoCoin1 from "../assets/cryptocoin.jpg";
import CryptoCoin2 from "../assets/cryptocoin2.jpg";
import Dansljardin from "../assets/dansljardin.png";

const BottomButtons = () => {
  return (
    <div className="flex flex-row mt-5">
      <input type="button" value="Demo" className="w-40 h-10 text-2xl mr-10" />
      <input type="button" value="Code" className="w-40 h-10 text-2xl" />
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-gray-400 -mt-2">
      <h3 className="text-5xl text-center uppercase">Projects</h3>
      {projectsInfo.map((project, index) => (
        <>
          {project.flip ? (
            <div className="mx-44 flex flex-row items-center justify-evenly mt-20">
              <Image
                src={project.image[0]}
                width={project.width}
                height={project.height}
              />

              <div className="w-1/3">
                <h4 className="text-4xl uppercase">{project.name}</h4>
                <p className="text-xl">{project.desc}</p>
                <BottomButtons />
              </div>
            </div>
          ) : (
            <div className="mx-44 flex flex-row items-center justify-evenly mt-20">
              <div className="w-1/3">
                <h4 className="text-4xl uppercase">{project.name}</h4>
                <p className="text-xl">{project.desc}</p>
                <BottomButtons />
              </div>

              {project.image.length == 1 ? (
                <Image
                  src={project.image[0]}
                  width={project.width}
                  height={project.height}
                />
              ) : (
                <div className="flex-row flex">
                  <div className="mr-3">
                    <Image
                      src={project.image[0]}
                      width={project.width}
                      height={project.height}
                    />
                  </div>
                  <div>
                    <Image
                      src={project.image[1]}
                      width={project.width}
                      height={project.height}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      ))}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="transform rotate-180"
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

const projectsInfo = [
  {
    name: "Movie Cloud",
    desc: "A web application that allows you to search for movies updated using an existing API. It displays the latest movies alongside a description, catergory and rating.",
    flip: false,
    image: [MovieCloud],
    width: 300,
    height: 330,
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
    flip: false,
    image: [CryptoCoin1, CryptoCoin2],
    width: 200,
    height: 440,
  },
  {
    name: "Builtspace",
    desc: "An industry sponsored project which took their manual process of inserting excel sheet data and converting it into a web application to accelerate their business process.",
    flip: true,
    image: [BuiltSpace],
    width: 420,
    height: 300,
  },
];

export default Projects;

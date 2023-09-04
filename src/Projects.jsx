import React from "react";
import { RightProjectCard, LeftProjectCard } from "./ProjectCard";
/* import BCScreenshot from "./img/BotsCompete.png"; */

const Projects = ({ english }) => {
  return (
    <div className="mx-8 md:mx-16 my-20">
      {/* ml-32 mt-32 pt-32***** */}
      {english ? (
        <h1 className="mb-7 font-main text-2xl text-hippie-blue-400">
          {/*  mb-10 */}
          Projects
        </h1>
      ) : (
        <h1 className="mb-7 font-main text-2xl text-hippie-blue-400">
          {/*  mb-10 */}
          Projets
        </h1>
      )}
      {english ? (
        <>
          <div className="mb-12 md:mb-[40%] lg:mb-[17%]">
            <RightProjectCard
              title={"BotsCompete"}
              lang={"React JS, Node.js, MySQL"}
              subDesc={"Graduation group project"}
              desc={
                "Secure competitve e-learning platform about machine learning challenges."
              }
              url={"https://github.com/MahaBourada/BotsCompete"}
            />
          </div>

          <div className="mb-12 md:mb-[40%] lg:mb-[17%]">
            <LeftProjectCard
              title={"E-learning website"}
              lang={"HTML & CSS, JavaScript"}
              desc={"Front-end of an e-learning website (teacher side)."}
              url={"https://github.com/MahaBourada/E-learning_Front-end"}
            />
          </div>

          <div className="mb-12 md:mb-[40%] lg:mb-[17%]">
            <RightProjectCard
              title={"Tic Tac Toe"}
              lang={"HTML & CSS, JavaScript"}
              desc={"A simple JavaScript tic tac toe game."}
              url={"https://github.com/MahaBourada/Tic-Tac-Toe"}
            />
          </div>

          <div className="mb-12 md:mb-[40%] lg:mb-[17%]">
            <LeftProjectCard
              title={"Weather application"}
              lang={"React JS"}
              desc={
                "Weather application developed using ReactJS and the Open Weather Map API."
              }
              url={"https://github.com/MahaBourada/React_Weather_App"}
            />
          </div>
        </>
      ) : (
        <>
          <div className="mb-12 md:mb-[40%] lg:mb-[17%]">
            <RightProjectCard
              title={"BotsCompete"}
              lang={"React JS, Node.js, MySQL"}
              subDesc={"Projet de fin d'études"}
              desc={
                "Plateforme d'apprentissage compétitive et sécurisée pour les défis techniques en machine learning."
              }
              url={"https://github.com/MahaBourada/BotsCompete"}
            />
          </div>

          <div className="mb-12 md:mb-[40%] lg:mb-[17%]">
            <LeftProjectCard
              title={"Site de e-learning"}
              lang={"HTML & CSS, JavaScript"}
              desc={"Front-end d'un site e-learning (côté enseignant)."}
              url={"https://github.com/MahaBourada/E-learning_Front-end"}
            />
          </div>

          <div className="mb-12 md:mb-[40%] lg:mb-[17%]">
            <RightProjectCard
              title={"Tic Tac Toe"}
              lang={"HTML & CSS, JavaScript"}
              desc={"Un simple jeu de tic tac toe JavaScript."}
              url={"https://github.com/MahaBourada/Tic-Tac-Toe"}
            />
          </div>

          <div className="mb-12 md:mb-[40%] lg:mb-[17%]">
            <LeftProjectCard
              title={"Weather application"}
              lang={"React JS"}
              desc={
                "Application météo développée avec ReactJS et l'API Open Weather Map."
              }
              url={"https://github.com/MahaBourada/React_Weather_App"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;

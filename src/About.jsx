import React from "react";
/* import { TechToolButton } from "./Button";
import { WhiteChipIcon, WhiteSettingIcon } from "./Icons"; */
import Clang from "./img/ClangIcon.png";
import ReactIcon from "./img/ReactIcon.png";
import NodeIcon from "./img/NodeIcon.png";
import ExpressIcon from "./img/ExpressIcon.png";
import TailwindIcon from "./img/TailwindIcon.png";
import MysqlIcon from "./img/MysqlIcon.png";
import HtmlCssIcon from "./img/HtmlCssIcon.png";
import JSIcon from "./img/JSIcon.png";
import JavaIcon from "./img/JavaIcon.png";
import LatexIcon from "./img/LatexIcon.png";
import GitIcon from "./img/GitIcon.png";
import image from "./img/ManTest.png";

const About = ({ english }) => {
  /* const [tech, setTech] = useState(true);
  const [tools, setTools] = useState(false); */

  return (
    <div className="mx-4 md:mx-12">
      {/* relative flex ml-24 mt-32 left-0 pt-32 */}

      {/* Text */}
      <div className="mx-4 my-20 z-10">
        {/* ml-[650px] z-10 */}
        {english ? (
          <>
            <h1 className="font-main text-2xl text-hippie-blue-400 mb-5 md:mb-1">
              About me
            </h1>
            <div className="flex lg:flex-row-reverse">
              <p className="mt-4 lg:mt-[3.75rem] font-secondary text-xl md:text-[1.3rem] xl:text-[1.422rem] xl:mr-12 2xl:mr-96 font-medium">
                {/* ml-14 mt-6 w-2/3  */}
                <span className="lg:ml-3 xl:ml-0 lg:block">
                  I have a bachelor's degree in software engineering. My journey
                  in computer science started with playing video games and
                  getting curious on how they're developed.
                </span>
                <br />
                <span className="lg:ml-6 xl:ml-3 lg:block">
                  After majoring in computer science, my interest switched to
                  web development, i felt like i was drawing using code.
                </span>
              </p>

              {/* Image */}
              <img
                className="hidden sm:block sm:w-44 lg:w-72 xl:w-96 sm:h-[11.5rem] lg:h-auto sm:mt-10 md:-mt-2 sm:rounded-2xl sm:object-cover" /* absolute -top-20 -right-0 -z-10  */
                src={image}
                width={550}
                alt="Test 2"
              />
            </div>

            <p className="mt-8 md:mt-3 lg:ml-3 xl:ml-6 font-secondary text-xl md:text-[1.3rem] xl:text-[1.42rem] font-medium">
              {/* ml-28 mt-6 w-1/2  */}
              Aside from programming, I enjoy many hobbies such as drawing,
              reading and playing video games.
            </p>

            <p className="mt-6 lg:mt-2 xl:ml-3 font-secondary text-xl md:text-[1.3rem] xl:text-[1.42rem] font-medium">
              {/* ml-6 mt-6 w-1/2  */}
              Here are some of the technologies I've worked with:
            </p>
          </>
        ) : (
          <>
            <h1 className="font-main text-2xl text-hippie-blue-400">
              À propos
            </h1>

            <div className="flex lg:flex-row-reverse">
              <p className="mt-4 lg:mt-[3.75rem] font-secondary text-xl md:text-[1.3rem] xl:text-[1.42rem]xl:mr-12 2xl:mr-96 font-medium">
                {/* ml-14 mt-6 w-1/2  */}
                <span className="lg:ml-3 xl:ml-0 lg:block">
                  Je suis titulaire d'un diplôme en Génie Logiciel. Mon intérêt
                  pour la programmation est né quand j'ai commencé à jouer aux
                  jeux videos. Leur développement a attisé ma curiosité.
                </span>
                <br />
                <span className="lg:ml-6 xl:ml-3 lg:block">
                  Après m'être spécialisée en Génie Logiciel, je me spécialement
                  intéressée au développement Web car je pouvais créer en
                  utilisant du code.
                </span>
              </p>

              {/* Image */}
              <img
                className="hidden sm:block sm:w-44 lg:w-72 xl:w-96 sm:h-[11.5rem] lg:h-auto sm:mt-10 md:-mt-2 sm:rounded-2xl sm:object-cover" /* absolute -top-20 -right-0 -z-10  */
                src={image}
                width={550}
                alt="Test 2"
              />
            </div>

            <p className="mt-8 xl:ml-6 font-secondary text-xl md:text-[1.3rem] xl:text-[1.42rem] font-medium">
              {/* ml-28 mt-6 w-1/2  */}À part la programmation, j'ai plusieurs
              hobbies comme le dessin, la lecture et les jeux videos.
            </p>

            <p className="mt-6 xl:ml-3 lg:mt-2 font-secondary text-xl md:text-[1.3rem] xl:text-[1.42rem] font-medium">
              {/* ml-6 mt-6 w-1/2  */}
              Voici quelques technologies que j'ai déja utilisée:
            </p>
          </>
        )}

        <div className="flex font-secondary text-xl md:text-[1.3rem] xl:text-[1.42rem] font-medium mt-5">
          <ul className="mx-10">
            <li className="flex items-center my-2">
              <img src={ReactIcon} alt="React icon" className="h-9 w-9" />
              <p className="mx-1">React JS</p>
            </li>
            <li className="flex items-center my-2">
              <img src={NodeIcon} alt="node.js icon" className="h-9 w-9" />
              <p className="mx-1">node.js</p>
            </li>
            <li className="flex items-center my-2">
              <img
                src={ExpressIcon}
                alt="expresss.js icon"
                className="h-9 w-9"
              />
              <p className="mx-1">express.js</p>
            </li>
            <li className="flex items-center my-2">
              <img src={TailwindIcon} alt="tailwind icon" className="h-9 w-9" />
              <p className="mx-1">Tailwind CSS</p>
            </li>
            <li className="flex items-center my-2">
              <img src={MysqlIcon} alt="MySQL icon" className="h-9 w-9" />
              <p className="mx-1">MySQL</p>
            </li>
            <li className="flex items-center my-2">
              <img
                src={HtmlCssIcon}
                alt="HTML & CSS icon"
                className="h-9 w-9"
              />
              <p className="mx-1">HTML & CSS</p>
            </li>
            <li className="flex items-center my-2">
              <img src={JSIcon} alt="JavaScript icon" className="h-9 w-9" />
              <p className="mx-1">JavaScript</p>
            </li>
            <li className="flex items-center my-2">
              <img src={Clang} alt="C Language icon" className="h-9 w-9" />
              <p className="mx-1">C</p>
            </li>
            <li className="flex items-center my-2">
              <img src={JavaIcon} alt="Java icon" className="h-9 w-9" />
              <p className="mx-1">Java</p>
            </li>
            <li className="flex items-center my-2">
              <img src={GitIcon} alt="Git icon" className="h-9 w-9" />
              <p className="mx-1">Git</p>
            </li>
            <li className="flex items-center my-2">
              <img src={LatexIcon} alt="LaTeX icon" className="h-9 w-9" />
              <p className="mx-1">LaTeX</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

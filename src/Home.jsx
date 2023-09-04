import React from "react";
import { Button } from "./Button";
import { WhitePaperIcon, WhitePersonIcon } from "./Icons";
import { Link } from "react-scroll";
import image from "./img/PinkTreeTest.png";
/* import useScrollDirection from "./hooks/useScrollDirection"; */
import { TypeAnimation } from "react-type-animation";

const Home = ({ english }) => {
  /* const scrollDirection = useScrollDirection(); */

  return (
    <div className={`relative mx-4 md:ml-12 lg:mx-14 my-20 z-10`}>
      {/* flex ml-32 mt-28 ${scrollDirection === 'down' ? 'pt-11' : 'pt-24'} transition-all */}
      <div className="p-4">
        {english ? (
          <>
            <h1 className="font-secondary text-xl font-bold">Hi there, I'm</h1>
            <h1 className="font-main text-xl text-thunderbird-700 tracking-wide mb-4 mt-2">
              Maha Marwa Bourada
            </h1>
            {english && (
              <div className="mt-4 font-main text-2xl text-hippie-blue-400 tracking-wide h-20 sm:h-14 md:h-6">
                <TypeAnimation
                  key="english"
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "I'm a software engineer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "I'm a web developer",
                    1000,
                  ]}
                  wrapper="h1"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            )}
            <p className="font-secondary text-2xl font-medium mt-5 leading-9 w-full xl:w-3/4 2xl:w-3/5">
              I've always been passionate about computer science, specifically
              web development where i can be creative. I have an interest in
              video games development as well.
            </p>
          </>
        ) : (
          <>
            <h1 className="font-secondary text-xl font-bold">Salut, je suis</h1>
            <h1 className="font-main text-xl text-thunderbird-700 tracking-wide mb-4 mt-2">
              Maha Marwa Bourada
            </h1>
            {!english && (
              <div className="mt-4 font-main text-2xl text-hippie-blue-400 tracking-wide h-20 md:h-14 lg:h-6">
                <TypeAnimation
                  key="french"
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Je suis ingénieure en logiciel",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Je suis développeuse web",
                    1000,
                  ]}
                  wrapper="h1"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            )}
            <p className="font-secondary text-2xl font-medium mt-5 leading-9 w-full xl:w-3/4 2xl:w-3/5">
              J'ai toujours été passionnée par l'informatique depuis mon plus
              jeune âge, surtout le développement web où je peux être créative.
              Je suis également interessée par le développement de jeux vidéos.
            </p>
          </>
        )}

        <div className="mt-10">
          {english ? (
            <div className="flex flex-col md:flex-row">
              <a
                href={require("./Files/CV_english.pdf")}
                download={"English Resume.pdf"}
                target="_blank"
                rel="noreferrer"
                className="w-fit md:mr-4"
              >
                <Button
                  label={"Resume"}
                  icon={<WhitePaperIcon />}
                  color={"bg-hippie-blue-400"}
                  hoverColor={"hover:bg-hippie-blue-500"}
                />
              </a>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="mt-3 md:mt-0 w-fit"
              >
                <Button
                  label={"About me"}
                  icon={<WhitePersonIcon />}
                  color={"bg-thunderbird-700"}
                  hoverColor={"hover:bg-thunderbird-800"}
                />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row">
              <a
                href={require("./Files/CV_francais.pdf")}
                download={"CV Français.pdf"}
                target="_blank"
                rel="noreferrer"
                className="w-fit md:mr-4"
              >
                <Button
                  label={"CV"}
                  icon={<WhitePaperIcon />}
                  color={"bg-hippie-blue-400"}
                  hoverColor={"hover:bg-hippie-blue-500"}
                />
              </a>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="mt-3 md:mt-0 w-fit"
              >
                <Button
                  label={"À propos"}
                  icon={<WhitePersonIcon />}
                  color={"bg-thunderbird-700"}
                  hoverColor={"hover:bg-thunderbird-800"}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Image */}
      <img
        className="absolute -z-10 top-52 sm:top-24 md:-top-14 lg:-top-24 xl:-top-40 2xl:-top-48 right-0 sm:right-1 lg:right-3 xl:right-6 2xl:right-10 w-72 lg:w-80 xl:w-[22rem] 2xl:w-96 rounded-2xl object-cover"
        src={image}
        alt="Test 1"
      />
    </div>
  );
};

export default Home;

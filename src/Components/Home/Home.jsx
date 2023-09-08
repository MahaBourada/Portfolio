import React from "react";
import { Button } from "../../Components/Global/Button";
import { WhitePaperIcon, WhitePersonIcon } from "../../Components/Global/Icons";
import { Link } from "react-scroll";
import image from "../../img/PinkTreeTest.png";
/* import useScrollDirection from "./hooks/useScrollDirection"; */
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

const Home = ({ show }) => {
  /* const scrollDirection = useScrollDirection(); */
  const { t } = useTranslation();

  return (
    <div
      className={`relative pt-14 lg:pt-[4.5rem] mx-8 md:ml-12 lg:mx-14 lg:ml-[4.5rem] mt-0 mb-20 z-10 ${
        show ? "blur-sm" : "blur-none"
      }`}
    >
      {/* flex ml-32 mt-28 ${scrollDirection === 'down' ? 'pt-11' : 'pt-24'} transition-all */}

      <h1 className="font-secondary text-xl font-bold">{t("Home.hello")}</h1>
      <h1 className="font-main text-xl text-thunderbird-700 tracking-wide mb-4 mt-2">
        Maha Marwa Bourada
      </h1>
      <div className="mt-4 font-main text-2xl text-hippie-blue-400 tracking-wide h-20 sm:h-14 md:h-6">
        <TypeAnimation
          key={t("Home.job.key")}
          sequence={[
            // Same substring at the start will only be typed out once, initially
            t("Home.job.1"),
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            t("Home.job.2")
            ,
            1000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
        />
      </div>
      <p className="font-secondary text-xl md:text-2xl font-medium mt-5 leading-9 w-full xl:w-3/4 2xl:w-3/5">
        {t("Home.desc")}
      </p>

      <div className="flex flex-col md:flex-row mt-10">
        <a
          href={t("Home.resume.file")}
          download={t("Home.resume.fileName")}
          target="_blank"
          rel="noreferrer"
          className="w-fit md:mr-4"
        >
          <Button
            label={t("Home.resume.label")}
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
            label={t("Home.about")}
            icon={<WhitePersonIcon />}
            color={"bg-thunderbird-700"}
            hoverColor={"hover:bg-thunderbird-800"}
          />
        </Link>
      </div>
      {/* Image */}
      <img
        className="absolute p-2 -z-10 top-52 sm:top-24 md:-top-14 lg:-top-24 xl:-top-40 2xl:-top-48 right-0 sm:right-1 lg:right-3 xl:right-6 2xl:right-10 w-72 lg:w-80 xl:w-[22rem] 2xl:w-96 rounded-2xl object-cover"
        src={image}
        alt="Test 1"
      />
    </div>
  );
};

export default Home;
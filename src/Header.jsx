import React from "react";
import { Link } from "react-scroll";
import useScrollDirection from "./hooks/useScrollDirection";

const Header = ({ english, handleLang }) => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`flex ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } transition-all duration-500 font-main text-xs py-4 px-36 bg-background-100 z-20 sticky`}
    >
      {" "}
      {/* shadow-md bg-background-100 z-50 sticky */}
      <h1
        className={`my-auto mr-6 cursor-pointer ${
          !english ? "underline" : ""
        } hover:underline  hover:translate-y-1px`}
        onClick={() => handleLang("french")}
      >
        FR
      </h1>
      <h1
        className={`my-auto cursor-pointer ${
          english ? "underline" : ""
        } hover:translate-y-1px`}
        onClick={() => handleLang("english")}
      >
        EN
      </h1>
      <div className="my-auto border-r-2 border-r-prussian-blue-950 ml-6 h-10"></div>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="my-auto ml-6 cursor-pointer hover:underline hover:translate-y-1px"
      >
        Home
      </Link>
      {english ? (
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="my-auto ml-6 cursor-pointer hover:underline hover:translate-y-1px"
        >
          About
        </Link>
      ) : (
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="my-auto ml-6 cursor-pointer hover:underline hover:translate-y-1px whitespace-nowrap"
        >
          À propos
        </Link>
      )}
      {english ? (
        <Link
          to="projects"
          smooth={true}
          duration={1050}
          className="my-auto ml-6 cursor-pointer hover:underline hover:translate-y-1px"
        >
          Projects
        </Link>
      ) : (
        <Link
          to="projects"
          smooth={true}
          duration={1050}
          className="my-auto ml-6 cursor-pointer hover:underline hover:translate-y-1px"
        >
          Projets
        </Link>
      )}
      <Link
        to="contact"
        smooth={true}
        duration={1100}
        className="my-auto ml-6 cursor-pointer hover:underline hover:translate-y-1px"
      >
        Contact
      </Link>
    </header>
  );
};

export default Header;

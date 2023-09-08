import React from "react";
import { Element } from "react-scroll";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Main = ({ show }) => {
  return (
    <main className="flex-col flex-grow">
      <Element name="home">
        <Home show={show} />
      </Element>

      <Element name="about">
        <About show={show} />
      </Element>

      <Element name="projects">
        <Projects show={show} />
      </Element>

      <Element name="contact">
        <Contact show={show} />
      </Element>
    </main>
  );
};

export default Main;

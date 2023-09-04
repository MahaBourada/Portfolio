import React from "react";
import { Element } from "react-scroll";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = ({ english }) => {
  return (
    <main className="flex-col flex-grow">
      <Element name="home">
        <Home english={english} />
      </Element>

      <Element name="about">
        <About english={english} />
      </Element>

      <Element name="projects">
        <Projects english={english} />
      </Element>

      <Element name="contact">
        <Contact english={english} />
      </Element>
    </main>
  );
};

export default Main;

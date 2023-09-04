import React from "react";
import GitHubIcon from "./img/GitHub.png";
import LinkedInIcon from "./img/LinkedIn.png";

const SocialMenu = () => {
  return (
    <div className="hidden flex-col items-center justify-center fixed mx-6 bottom-0">
      <a href="https://github.com/MahaBourada" target="_blank" rel="noreferrer">
        <img
          src={GitHubIcon}
          alt="GitHub Icon"
          width={50}
          height={50}
          className="hover:-translate-y-1px hover:translate-x-1px"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/maha-marwa-bourada/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={LinkedInIcon}
          alt="LinkedIn Icon"
          width={50}
          height={50}
          className="hover:-translate-y-1px hover:translate-x-1px"
        />
      </a>
      <div className="flex flex-col items-end justify-start border-r-2 border-r-thunderbird-700 w-1 h-24 mx-auto"></div>
    </div>
  );
};

export default SocialMenu;

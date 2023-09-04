import React from "react";
import { RedGitIcon } from "./Icons";
import BCScreenshot from "./img/BotsCompete.png";

const RightProjectCard = ({ title, lang, desc, subDesc, url }) => {
  return (
    <div className="md:flex md:relative">
      {/* Image */}
      <img
        className="hidden md:block md:rounded-3xl md:w-3/4 lg:w-[55%] xl:w-[57%] 2xl:w-1/2 md:h-auto md:z-10 md:object-cover md:object-left-top"
        src={BCScreenshot}
        alt="BotsCompete screenshot"
      />
      <div className="md:absolute md:top-[13.5rem] lg:top-20 xl:top-40 2xl:top-[12.5rem] md:right-0 2xl:right-5 border-thunderbird-700 border-4 w-full md:w-3/4 lg:w-[47%] xl:w-[45%] 2xl:w-1/2 p-8 h-fit">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="mb-2 font-main text-lg 2xl:text-2xl text-thunderbird-700">
              {title}
            </h1>
            <p className="ml-2 font-secondary text-xl font-semibold text-prussian-blue-950">
              {lang}
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="hover:translate-x-1px hover:-translate-y-1px ml-3"
          >
            <RedGitIcon />
          </a>
        </div>

        <div className="mt-4">
          {subDesc && (
            <b className="ml-4 font-secondary text-xl text-prussian-blue-950">
              {subDesc}
            </b>
          )}
          <p className="font-secondary text-xl md:text-[1.3rem] xl:text-[1.4rem] font-medium">{desc}</p>
        </div>
      </div>
    </div>
  );
};

const LeftProjectCard = ({ title, lang, desc, subDesc, url }) => {
  return (
    <div className="md:flex md:relative">
      <div className="border-thunderbird-700 border-4 w-full md:w-3/4 lg:w-[47%] xl:w-[45%] 2xl:w-1/2 p-8 h-fit">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="mb-2 font-main text-lg 2xl:text-2xl text-thunderbird-700">
              {title}
            </h1>
            <p className="ml-2 font-secondary text-xl font-semibold text-prussian-blue-950">
              {lang}
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="hover:translate-x-1px hover:-translate-y-1px ml-3"
          >
            <RedGitIcon />
          </a>
        </div>

        <div className="mt-4">
          {subDesc && (
            <b className="ml-4 font-secondary text-xl text-prussian-blue-950">
              {subDesc}
            </b>
          )}
          <p className="font-secondary text-xl md:text-[1.3rem] xl:text-[1.4rem] font-medium">{desc}</p>
        </div>
      </div>
      {/* Image */}
      <img
        className="hidden md:block md:absolute md:-bottom-[13.5rem] lg:-bottom-20 xl:-bottom-40 2xl:-bottom-[12.5rem] lg:w-[55%] xl:w-[57%] 2xl:w-1/2 md:right-0 2xl:right-5 md:rounded-3xl md:w-3/4 md:h-auto md:z-10 md:object-cover md:object-left-top"
        src={BCScreenshot}
        alt="BotsCompete screenshot"
      />
    </div>
  );
};

export { RightProjectCard, LeftProjectCard };

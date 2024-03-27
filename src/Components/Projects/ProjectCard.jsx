import React from "react";
import { RedGitIcon } from "../Global/Icons";

const RightProjectCard = ({ projectID, title, image, lang, desc, subBool, subDesc, url }) => {  
  return (
    <div
      key={projectID}
      className="md:flex md:relative mb-12 md:mb-64 lg:mb-28 lg:mx-4 xl:mb-32 min-[1536px]:mt-48"
    >
      {/* Image */}
      <img /* 1920 x 931 */
        className="hidden p-[2px] bg-background-300 md:block md:rounded-2xl md:w-[32rem] xmd:w-[35rem] lg:w-[55%] 2xl:w-1/2 h-[16.5rem] xmd:h-72 lg:h-[20%] md:z-10 md:object-fill md:object-left-top shadow-right"
        src={image}
        alt={title}
      />
      <div className="cardText md:absolute md:top-[15.5rem] xmd:top-[17rem] lg:top-12 xl:top-24 xxl:top-36 2xl:top-[12.5rem] md:right-0 2xl:right-5 w-full md:w-3/4 xmd:w-2/3 lg:w-[47%] xl:w-[47%] 2xl:w-1/2 p-8 h-50 md:h-60 lg:h-64">
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
            className="hidden md:block hover:translate-x-1px hover:-translate-y-1px ml-3"
          >
            <RedGitIcon />
          </a>
        </div>
        <div className="pb-8">
          <div className="mt-4">
            {subBool && (
              <b className="ml-4 font-secondary text-xl text-prussian-blue-950">
                {subDesc}
              </b>
            )}
            <p className="font-secondary text-xl md:text-[1.3rem] xl:text-[1.4rem] font-medium">
              {desc}
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="md:hidden hover:translate-x-1px hover:-translate-y-1px py-2 md:ml-3 float-right"
          >
            <RedGitIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const LeftProjectCard = ({ projectID, title, image, lang, desc, subBool, subDesc, url }) => {
  return (
    <div
      key={projectID}
      className="md:flex md:flex-row-reverse md:relative mb-12 md:mb-64 lg:mb-28 xl:mb-32 min-[1536px]:mt-48"
    >
      {/* Image */}
      <img /* 1920 x 931 */
        className="hidden p-[2px] bg-background-300 md:block md:rounded-2xl md:w-[32rem] xmd:w-[35rem] lg:w-[55%] 2xl:w-1/2 h-[16.5rem] xmd:h-72 lg:h-[20%] md:z-10 md:object-fill md:object-left-top shadow-left"
        src={image}
        alt={title}
      />
      <div className="cardText md:absolute md:left-0 md:top-[15.5rem] xmd:top-[17rem] lg:top-12 xl:top-24 xxl:top-36 2xl:top-[12.5rem] 2xl:left-5 md:right-0 2xl:right-5 w-full md:w-3/4 xmd:w-2/3 lg:w-[47%] xl:w-[47%] 2xl:w-1/2 p-8 h-50 md:h-60 lg:h-64">
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
            className="hidden md:block hover:translate-x-1px hover:-translate-y-1px ml-3"
          >
            <RedGitIcon />
          </a>
        </div>
        <div className="pb-8">
          <div className="mt-4">
            {subBool && (
              <b className="ml-4 font-secondary text-xl text-prussian-blue-950">
                {subDesc}
              </b>
            )}
            <p className="font-secondary text-xl md:text-[1.3rem] xl:text-[1.4rem] font-medium">
              {desc}
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="md:hidden hover:translate-x-1px hover:-translate-y-1px py-2 md:ml-3 float-right"
          >
            <RedGitIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export { RightProjectCard, LeftProjectCard };

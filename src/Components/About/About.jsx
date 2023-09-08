import React from "react";
import image from "../../img/ManTest.png";
import techData from "./Tech.json";
import { useTranslation } from "react-i18next";

const About = ({ show }) => {
  const techs = techData;
  const { t } = useTranslation();
  return (
    <div
      className={`mx-4 lg:pt-1 md:mx-12 lg:ml-20 ${
        show ? "blur-sm" : "blur-none"
      }`}
    >
      {/* relative flex ml-24 mt-32 left-0 pt-32 */}

      {/* Text */}
      <div className="mx-4 my-20 z-10">
        {/* ml-[650px] z-10 */}
        <h1 className="font-main pt-10 lg:pt-0 text-2xl text-hippie-blue-400 mb-5 md:mb-1">
          {t("About.title")}
        </h1>
        <div className="flex lg:flex-row-reverse">
          <p className="mt-4 lg:mt-[3.75rem] font-secondary text-xl md:text-[1.3rem] xl:text-[1.422rem] xl:mr-12 2xl:mr-96 font-medium">
            {/* ml-14 mt-6 w-2/3  */}
            <span className="lg:ml-3 xl:ml-0 lg:block">{t("About.par1")}</span>
            <br />
            <span className="lg:ml-6 xl:ml-3 lg:block">{t("About.par2")}</span>
          </p>

          {/* Image */}
          <img
            className="hidden p-2 sm:block sm:w-44 lg:w-72 xl:w-96 sm:h-[11.5rem] lg:h-auto sm:mt-10 md:-mt-2 sm:rounded-2xl sm:object-cover" /* absolute -top-20 -right-0 -z-10  */
            src={image}
            width={550}
            alt="Test 2"
          />
        </div>

        <p className="mt-8 md:mt-3 lg:ml-3 xl:ml-6 font-secondary text-xl md:text-[1.3rem] xl:text-[1.42rem] font-medium">
          {/* ml-28 mt-6 w-1/2  */}
          {t("About.par3")}
        </p>

        <p className="mt-6 lg:mt-2 xl:ml-3 font-secondary text-xl md:text-[1.3rem] xl:text-[1.42rem] font-medium">
          {/* ml-6 mt-6 w-1/2  */}
          {t("About.par4")}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 mx-10 font-secondary text-xl md:text-[1.3rem] xl:text-[1.42rem] font-medium">
          {techs.map((tech) => {
            return (
              <li key={tech.id} className="flex items-center">
                <img src={tech.icon} alt={tech.name} className="h-14 w-14 p-2" />
                <p>{tech.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;

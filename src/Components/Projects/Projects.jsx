import React from "react";
import { RightProjectCard, LeftProjectCard } from "../Projects/ProjectCard";
import projectsData from "./projectsData.json";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = projectsData;

  console.log(projects)

  return (
    <div className="mx-8 md:mx-16 pt-10 lg:pt-[4.5rem] lg:ml-24 my-20">
      {/* ml-32 mt-32 pt-32 */}
      <h1 className="mb-7 font-main text-2xl text-hippie-blue-400">
        {/*  mb-10 */}
        {t("Projects.title")}
      </h1>

      {projects.map((project) => {
        return (
          <>
            {project.id % 2 === 0 ? (
              <RightProjectCard
                projectID={project.id}
                title={t(`Projects.list.${project.id}.title`)}
                lang={project.lang}
                subBool={project.subDesc}
                subDesc={t(`Projects.list.${project.id}.subDesc`)}
                desc={t(`Projects.list.${project.id}.desc`)}
                image={project.image}
                url={project.url}
              />
            ) : (
              <LeftProjectCard
                projectID={project.id}
                title={t(`Projects.list.${project.id}.title`)}
                lang={project.lang}
                subBool={project.subDesc}
                subDesc={t(`Projects.list.${project.id}.subDesc`)}
                desc={t(`Projects.list.${project.id}.desc`)}
                image={project.image}
                url={project.url}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Projects;

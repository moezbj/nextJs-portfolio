"use client"
import projectData from "./projectsData.json";
import Project from "../components/Project";
import PageHeader from "../components/PageHeader";

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <section className="flex flex-col items-center overflow-hidden mt-12 pb-12">
      <PageHeader title="Portfolio" description="View my work" />
      <div className="p-8 grid grid-cols-12 gap-4">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;

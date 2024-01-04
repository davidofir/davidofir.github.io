import React from "react";
import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {INFO.projects.map((project, index) => (
        <Project
          key={index}
          logo={project.logo}
          title={project.title}
          description={project.description}
          linkText={project.linkText}
          link={project.link}
          imageUrls={project.imageUrls} 
          videoUrl={project.videoUrl}
          frameworks={project.frameworks}
		  languages={project.languages}
		  platforms={project.platforms}
        />
      ))}
    </div>
  );
};

export default AllProjects;

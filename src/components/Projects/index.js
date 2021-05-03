import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const Projects = (props) => {
  return (
    <div className="col-lg-6 col-md-6 portfolio-item filter-web">
      <div className="portfolio-wrap">
        <h3 className="about content h3">{props.name}</h3>
        <img src={props.image} className="img-fluid" alt={props.alt} />
        <div className="portfolio-links">
          <a
            href={props.website}
            target="blank"
            title="App 2">
            <i className="bx bx-plus">
              <AiOutlineEye />
            </i>
            Launch Site
          </a>
          <a href={props.github} target="blank" title="More Details">
            <i className="bx bxl-github">
              <AiFillGithub />
            </i>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
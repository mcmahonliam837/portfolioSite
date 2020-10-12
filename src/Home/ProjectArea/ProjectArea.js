import React from "react";
import "./ProjectArea.css";
import Project from "./Project/Project";

import { projects, project_into } from "../Data/Projects";

const ProjectArea = () => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="project_area">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="projects_into_area">
          <h1 className="title">
            {(() => {
              if (dimensions.width > 768) {
                return <span>&#x25A0;&thinsp;&thinsp;</span>;
              } else return "";
            })()}
            PROJECTS{" "}
          </h1>
          <div id="projects"></div>
          <p>{project_into}</p>
        </div>
        <div className="projectList">
          {projects.map((p, i) => {
            return (
              <Project
                side={i % 2 === 0 ? "left" : "right"}
                title={p.title}
                desc={p.desc}
                icon={require("./../Design/" + p.image)}
                learnMore={p.github !== undefined}
                url={p.github}
              />
            );
          })}
        </div>
      </div>
      <div className="moreButtonArea">
        <a
          href="https://github.com/mcmahonliam837"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="moreButton" onClick={() => {}}>
            AND MORE
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectArea;

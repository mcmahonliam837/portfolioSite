import React from 'react';
import "./ProjectArea.css";
import Project from "./Project/Project";

import vetProjIcon from './../Design/VetProjIcon.png';
import indexImg1 from './../Design/Project1.png';
import indexImg2 from './../Design/Project2.png';
import indexImg3 from './../Design/Project3.png';
import indexImg4 from './../Design/Project4.png';

const VET_DESC =
  'A student lead research project sponsered by the Veterinary School at Seneca College. \
A prototype device to simulate different vital signs and medical conditions of animals \
in order to train veterinary students.';


const ALPHA_DESC =
  'A 3D game engine developed to learn and experiment with OpenGL. This is still in \
  development as a hobby project using C++ with GLEW and GLFW. Currently supports \
  mesh loading from OBJ files, and basic 2D texture maps.';


const IMG_DESC =
  'An web API written in Go for experimenting with Golangs concurrency model, and functional programming \
  capabilities. Created as a platform for me to experiment with different image processing techniques.';


const THIS_DESC =
  'This website is developed with React and is hosted on Firebase \
  Hosting. The email form submits to a Firebase function which handles the request. \
  ';


const ProjectArea = () => {
  return (
    <div id="project_area">
      <div className="projects_into_area">

        <h1 className="title">&#x25A0;&thinsp;&thinsp;PROJECTS </h1>
        <div id='projects'></div>
        <p>
          Throughout my years of development experience I have had many opportunities to work on some really amazing projects. Below is an example of a professional project I have worked on, as well as three personal projects to illustrate the wide range of my skills and interests. I have worked on many more projects and would love to discuss them with you!
        </p>

      </div>
      <Project side='left' title='Veterinary Training Mannequin' desc={VET_DESC} icon={vetProjIcon} indexImg={indexImg1} learnMore={false} />

      <Project side='right' title='Alpha Game Engine' desc={ALPHA_DESC} icon={''} indexImg={indexImg2} url="https://github.com/mcmahonliam837/AlphaGameEngine" />

      <Project side='left' title='Image Processing API' desc={IMG_DESC} icon={''} indexImg={indexImg3} url="https://github.com/mcmahonliam837/ImageProcessingAPI" />

      <Project side='right' title='This Website' desc={THIS_DESC} icon={''} indexImg={indexImg4} url="https://github.com/mcmahonliam837/portfolioSite" />

      <div className="moreButtonArea">
        <a href="https://github.com/mcmahonliam837" target="_blank" rel="noopener noreferrer">
          <button id="moreButton" onClick={() => { }}>AND MORE</button>
        </a>
      </div>
    </div>
  );

};

export default ProjectArea;
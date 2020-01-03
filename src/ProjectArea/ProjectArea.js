import React from 'react';
import "./ProjectArea.css";
import Project from "./Project/Project";

import vetProjIcon from './../Design/VetProjIcon.png';
import indexImg1 from './../Design/Project1.png';

const VET_DESC =
    'A student lead research project sponsered by the Veterinary School at Seneca College. \
A prototype device to simulate different vital signs and medical conditions of animals \
in order to train veterinary students.';



const ProjectArea = () => {
    return (
        <div id="project_area">
            <div className="projects_into_area">

                <h1 className="title">&#x25A0;&thinsp;&thinsp;PROJECTS </h1>
                <div id='projects'></div>
                <p>
                    Throughout my years working in design and development, I’ve had the chance to work wiith quite a few amazing
                    people. Here are some examples of the projects I’ve had the honour to be a part of.
                </p>

            </div>
            <Project side='left' title='Veterinary Training Mannequin' desc={VET_DESC} icon={vetProjIcon} indexImg={indexImg1} />

            <div className="moreButtonArea">
                <button id="moreButton" onClick={() => { }}>AND MORE</button>
            </div>
        </div>
    );

};

export default ProjectArea;
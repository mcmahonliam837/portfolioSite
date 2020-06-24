import React from 'react';
import "./Project.css";
import underline from './../../Design/ProjectTitleUnderLine.png';




const Project = (props) => {


  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });


  // if (props.side === 'left' || dimensions.width <= 1525) {
  //   return LeftProject(props);
  // } else {
  //   return RightProject(props);
  // }

  const img = (
    <div className="project_image_block_left">
      <img src={props.icon} className="project_image" alt='' />
    </div>
  );

  return (
        <div className="projectContents" style={{ paddingTop: "100px !important" }}>

          <div className='project_img'>


            {dimensions.width > 768 &&
              <img src={props.indexImg} className="ProjectListIndex" alt='' />
            }

            {dimensions.width > 768 &&
              props.side === 'left' && img
            }

          </div>

          <div className="projectRightBlock">
            <div className="projectTitleDiv">
              <h1 className="projectTitleRight">{props.title}</h1>
              <img src={underline} className="projectTitleUnderLineRight" alt='' />
            </div>
            <p className="projectContentRight">{props.desc}
              <br />
              { (props.learnMore === undefined || props.learnMore) &&
              <a href={props.url} target="_blank" rel="noopener noreferrer">
                <span className="highlight" style={{cursor: "pointer"}}>Learn more</span>
              </a>
              }
            </p>
          </div>

          {(props.side === 'right' && dimensions.width > 768) && img}


        </div>
  );


};

export default Project;
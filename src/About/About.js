import React from 'react';
import "./About.css";
import availibleSwitch from './../Design/AvailibleSwitch.png';
import webDesignIcon from './../Design/WebDesignIcon.png';
import mobileDesignIcon from './../Design/MobiIeDesignIcon.png';
import embeddedSystems from './../Design/EmbeddedSystems.png';

const About = () => {



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





  return (
    <div id="about_area">
      <div>
        <h1 className="title">{ (() => {if (dimensions.width > 768) { return <span>&#x25A0;&thinsp;&thinsp;</span>;} else return ''; })() }Hi there, I’m Liam!</h1>
        <p>
          A graduate of Seneca College's Computer Engineering Technology Program (Co-op), Skills Ontario Competition Medalist, current York University Computer Science student and passionate computer enthusiast. There is nothing that I love more than a challenge which pushes the limits of my knowledge. This passion was my inspiration to successfully represent Seneca at Skills Ontario, to join a student-led research project at Seneca, and continue to challange myself now at York. If you are interested, here is my <a href='Resume.pdf'  target="_blank" rel="noopener noreferrer"><span className='highlight'>resume</span></a>.
        </p>
      </div>

      <div>
        <h3 id='currentAvailability'><img src={availibleSwitch} alt='' /> I’M CURRENTLY <span className="highlight">AVAILABLE</span> FOR HIRE</h3>
      </div>


      <div id="what_i_do_area">
        <ul id="whatIDo">
          <li>
            <img src={webDesignIcon} alt='' />
            <h1>Web Development</h1>
          </li>

          <li>
            <img src={mobileDesignIcon} alt='' />
            <h1>Mobile Development</h1>
          </li>

          <li>
            <img src={embeddedSystems} alt='' />
            <h1>Embedded Systems</h1>
          </li>
        </ul>
      </div>


    </div>
  );

};

export default About;
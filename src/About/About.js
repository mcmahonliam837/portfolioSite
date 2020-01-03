import React from 'react';
import "./About.css";
import availibleSwitch from './../Design/AvailibleSwitch.png';
import webDesignIcon from './../Design/WebDesignIcon.png';
import mobileDesignIcon from './../Design/MobiIeDesignIcon.png';
import embeddedSystems from './../Design/EmbeddedSystems.png';

const About = () => {
  return (
    <div id="about_area">
      <div>
        <h1 className="title">&#x25A0;&thinsp;&thinsp;Hi there, I’m Liam!</h1>
        <p>
          A graduate of Seneca Colleges Computer Engineering Technology program, Skills Ontario Competition Medalist, current York University Computer Science student and passionate computer enthusiast. There is nothing that I love more than a challange which pushes the limits of my knowledge. This passion is what drove me to represent Seneca at Skills Ontario, to join a student lead research project at seneca, and continue to challange myself now at York. If you are interested, here is my <a href='Resume.pdf'  target="_blank" rel="noopener noreferrer"><span className='highlight'>resume</span></a>.
        </p>
      </div>

      <div>
        <h3 id='currentAvailability'><img src={availibleSwitch} alt='' /> I’M CURRENTLY <span className="highlight">AVAILABLE</span> FOR HIRE</h3>
      </div>


      <div>
        <ul id="whatIDo">
          <li>
            <img src={webDesignIcon} alt='' />
            <h1>Web Development</h1>
          </li>

          {/* <li>
            <img src={mobileDesignIcon} alt='' />
            <h1>Mobile Development</h1>
          </li> */}

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
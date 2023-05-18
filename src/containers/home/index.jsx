import React from "react";
import "./styles.scss";
import {FaLinkedin , FaGithub , FaInstagram} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate'

const Home = () => {
  const navigate = useNavigate();
  const handleNavigteToContactMePage = () => {
    navigate("/contact");
  };
  
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello !! I am Mayank Bisht
          <br/>
          Student , Researcher & Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigteToContactMePage}> Contact Me</button>
          <button ><a href="https://github.com/MayankBisht8630"><FaGithub/></a></button>
          <button ><a href="https://www.linkedin.com/in/mayank-bisht-b00ba6236"><FaLinkedin/></a></button>
          <button ><a href="https://www.instagram.com/bisht_mayank_/"><FaInstagram/></a></button>
          <button ><a href="https://docs.google.com/document/d/1F356jblSWedrm9ns6yRNwVrZ1JlEi1WTwfs_YzS2IJU/edit?usp=sharing">Resume</a></button>

        </div>
      </Animate>
    </section>
  );
};
export default Home;

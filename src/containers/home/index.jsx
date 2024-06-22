import React from "react";
import "./styles.scss";
import {FaLinkedin , FaGithub , FaInstagram } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { Animate } from 'react-simple-animate'
import particles from "../../utills.js/particles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Home = () => {
  const navigate = useNavigate();
  const handleNavigteToContactMePage = () => {
    navigate("/contact");
  };

  const handleInit = async (main) => {
    await loadFull(main);
  };
  const renderParticleJsInHomepage = location.pathname === "/";
  
  return (
    <section id="home" className="home">
      {/*particles js*/}
      {renderParticleJsInHomepage && (
            <Particles id="particles" options={particles} init={handleInit} />
          )}
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
          <button ><a href="https://github.com/MayankBisht8630" rel="noopener" target="_blank"><FaGithub/></a></button>
          <button ><a href="https://www.linkedin.com/in/mayank-bisht-b00ba6236" rel="noopener" target="_blank"><FaLinkedin/></a></button>
          <button ><a href="https://www.instagram.com/bisht_mayank_/" rel="noopener" target="_blank"><FaInstagram/></a></button>
          <button ><a href="https://drive.google.com/drive/folders/1ZxFUEL2DSSYY4vRuSJocD17izBALlfcR?usp=sharing" rel="noopener" target="_blank">Resume</a></button>

        </div>
      </Animate>
    </section>
  );
};
export default Home;

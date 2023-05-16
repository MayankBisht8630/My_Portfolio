import React from "react";
import "./styles.scss";
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
          <br />
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
        </div>
      </Animate>
    </section>
  );
};
export default Home;

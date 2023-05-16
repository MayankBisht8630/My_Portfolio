import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiJava } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiJavascript } from "react-icons/di";

const personalDetails = [
  {
    label: "Name",
    value: "Mayank Bisht",
  },
  {
    label: "Age",
    value: "20",
  },
  ,
  {
    label: "Address",
    value: "Kashipur Uttarakhand",
  },
  {
    label: "Email",
    value: "mayank8630bisht@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 8630947464",
  },
];

const jobSummary =
  "Seasoned and Independent Full Stack Java Software Developer With 1 Year of experience in blending the art of design in skill of programming to deliver an immersing and engaging user experience through effecient software development . Very passionate about Java Software Development . ";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalwrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Java Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">Personal Details</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceswrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__serviceswrapper__innerContent">
              <div>
                <DiJavascript
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              <div>
                <DiDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiJava size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;

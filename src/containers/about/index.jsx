import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

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
  "Seasoned and Independent Full Stack Java Software Developer With 1 Year of experience";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
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
          <h3>Personal Details</h3>
          <ul>
            {personalDetails.map((item, i)=>{
              <li key={i}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>;
            })}
          </ul>
        </Animate>
      </div>
    </section>
  );
};
export default About;

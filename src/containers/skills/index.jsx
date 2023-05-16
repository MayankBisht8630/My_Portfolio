import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import './util.js';
import { skillData } from "./util.js";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills "
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="skills__content-wrapper">
        {skillData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translatex(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div>
                {
                  item.data.map((skillItem)=>(
                    <AnimateKeyframes>
                      
                    </AnimateKeyframes>
                  ))
                }
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;

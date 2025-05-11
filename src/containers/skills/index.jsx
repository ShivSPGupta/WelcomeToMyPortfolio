import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {
            
        }
      </div>
    </section>
  );
};

export default Skills;

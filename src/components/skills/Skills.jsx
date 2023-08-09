
import React from "react";
import "./skills.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/bld.jpg";
import Image3 from "../../assets/service-3.svg";

const data = [
    {
      id: 1,
      image: Image1,
      title: "Personal Skills",
      description:
        "Excellent in written and verbal skills, Collaborative and a Team Worker, Critical Thinker and Detail Oriented, Diverse, Manages Time Efficiently, Strong Communication"
    },
    {
      id: 2,
      image: Image2,
      title: "Internship Acquired Skills",
      description:
      "Contributed on creating Onboarding Process Flow and RACI matrix, Ensures new hires have technical assistance prior to taking actual tasks, Assisted PMO with documentation and other project deliverables, Provided and Presented Onboarding Overview for new resources to detail the roadmap of onboarding, Basic Proficiency in Agile Scrum and Kanban, Basic Proficiency in ITIL (Incident, Problem and Change Management"
    },
    {
      id: 3,
      image: Image3,
      title: "Technical Skills",
      description:
      " Knowledge in Programming (Java, C++, Visual Studio, Python), Web Development (HTML, CSS, REST APIs, REACT), Microsoft Office (Word, Excel, Powerpoint, etc.), Adobe Creative Suite (Photoshop, Animate), Video Editing (Adobe Premiere and Capcut), Design Thinking" 
  },
      
  ];

const Skills = () => {
    return <section className="skills container section" id="skills">
        <h2 className="section__title">Skills</h2>

        <div className="skills__container grid">
            {data.map(({id, image, title, description}) => {
            return(
                <div className="skills__card" key={id}>

                    <img src={image} alt="" className="skills__img" />
                    <h3 className="skills__title">{title}</h3>
                    <p className="skills__description">{description}</p>
                </div>
            );
        })}
        </div>
    </section>
}

export default Skills
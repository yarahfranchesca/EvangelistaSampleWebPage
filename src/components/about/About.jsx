import React from "react";
import "./about.css";
import Image from "../../assets/1x1.jpg"

const About = () => {
    return (
        <section className="about container section" id='about'> 
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
            <img src={Image} alt="" className="about__img" width="150" height="40"/>
      
       <div className="about__data grid">
       <div className="about__info">
        <p className="about__bday"><b>Date of Birth: August 4, 2001</b></p>
        <p className="about__nationality"><b>Nationality: Filipino</b></p>

        <p className="about__Gender"><b>Gender: Female</b></p>

        <p className="about__description"><br/>Passionate Information Technology Graduate that
        is seeking a career in a progressive company that provides an opportunity to capitalize my 
        proficient knowledge in a range of computer systems, languages, tools and testing methodologies. </p>
        <a href="" className="btn">Download CV</a>

       </div>

       <div className="about__skills grid">
       <div className="skills__data">
       <div className="skills__titles">
        <h3 className="skills__name">Javascript</h3>
        <span className="skills__number ">80%</span>
       </div>

       <div className="skills__bar">
        <span className="skills__percentage js"></span>
       </div>
       </div>

       <div className="skills__data">
       <div className="skills__titles">
        <h3 className="skills__name">Java</h3>
        <span className="skills__number ">70%</span>
       </div>

       <div className="skills__bar">
        <span className="skills__percentage java"></span>
       </div>
       </div>


       <div className="skills__data">
       <div className="skills__titles">
        <h3 className="skills__name">PHP</h3>
        <span className="skills__number ">55%</span>
       </div>

       <div className="skills__bar">
        <span className="skills__percentage php"></span>
        </div>
       </div>

       <div className="skills__data">
       <div className="skills__titles">
        <h3 className="skills__name">HTML</h3>
        <span className="skills__number ">80%</span>
       </div>

       <div className="skills__bar">
        <span className="skills__percentage html"></span>

        </div>
       </div>

       <div className="skills__data">
       <div className="skills__titles">
        <h3 className="skills__name">CSS</h3>
        <span className="skills__number ">80%</span>
       </div>

       <div className="skills__bar">
        <span className="skills__percentage css"></span>
       
       
       </div>
       </div>
       </div>
       </div>
       </div>
        
        </section>
    );
};

export default About
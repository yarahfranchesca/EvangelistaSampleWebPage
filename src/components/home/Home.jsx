import React from "react";
import "./home.css";
//import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Me from "../../assets/1x1.jpg";


const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" width="150" height="40"  />
            <h1 className="home__name">Yarah Franchesca Evangelista</h1>
            <span className="home__education">Fresh Graduate Web Developer</span>

            <HeaderSocials />

            <a href="contact" className="btn">Hire me!</a>
            <ScrollDown/>

           
            </div>

            <Shapes/>
        
        </section>
    )
}

export default Home
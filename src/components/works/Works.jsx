import React, { useState } from "react";
import "./works.css";
import Menu from './Menu';

const Works = () => {
    const [items, setItems] = useState (Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    }
    return (
    <section className="work container section" id="works">
        
        <h2 className="section__title">Sample Works</h2>
        <a href="https://drive.google.com/drive/u/0/folders/19K5E3vtC8iQAL1ybmxo1mYaVdb4UfmcI"  target='_blank'>
            <button type="button" className="btn">Link for all Sample Works</button></a>


        <div className="work__filters">
            <span className="work__item" onClick={() => setItems
            (Menu)}>Everything</span>
            <span className="work__item" onClick={() => filterItem
            ("Creative")}>Creative</span>
            <span className="work__item" onClick={() => filterItem
            ("Game")}>Game</span>
            <span className="work__item" onClick={() => filterItem
            ("Design")}>Design</span>
            <span className="work__item" onClick={() => filterItem
            ("Single Page Works")}>Single Page Works</span>

        </div>

        <div className="work__container grid">
            {items.map((elem) => {
                const{ id, image, title, category} = elem;

                return (
                    <div className="work__card" key={id}>
                        <div className="work__thumbnail">
                            <img src={image} alt="" className="work__img"/>
                            <div className="work__mask"></div> 
                            </div>


                                <span className="work__category">{category}</span>
                                <h3 className="work__title">{title}</h3>
                                <a href="#" className="work__button">
                                <i className="icon-link work__button-icon"></i>

                           

                                </a>

                                </div>
                )
                
            })}
        </div>
    </section>
    );
};

export default Works
import React from "react";

const Card = (props) => {
    return (
        <div className="timeline__item">
            <i className={props.icon} ></i> 
            <span className="timeline__date">{props.year}</span>
            <h2 className="timeline__title">{props.title}</h2>
            <h3 className="timeline__inst">{props.inst}</h3>
            <p className="timeline text">{props.desc}</p>
                  </div>
    )
}

export default Card
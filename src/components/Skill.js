import React from 'react';
import '../styles/skills.css';

const Skill = (props) => {

    return (
        <div className="skill-container col-md-4 skill-card" >
            <div className="skill-card-content">
                <span className="icon"> <props.data.icon /></span>
                <h1 className="heading">{props.data.heading}</h1>
                <p className="text">{props.data.text}</p>
                <p className="preskillsText">{props.data.preskillsText}</p>
                {props.data.skills.map(skill => (
                    <li key={skill}>{'- '}{skill}</li>
                ))}
            </div>
        </div>
    )
}

export default Skill;

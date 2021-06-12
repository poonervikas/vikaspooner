import React from 'react';
import '../styles/skills.css';
import { SKILLS } from '../information/Skills'
import Skill from './Skill';

const Skills = () => {
    return (
        <div>
            <h1 className="main-heading">My Tech Stack</h1>
            <div className="container">
            <div className="skills row">

            {
                SKILLS.map(skillData => (
                    <Skill data={skillData} key={skillData.heading} />
                ))
            }
        </div>
               
            </div >
        </div >
    )
}

export default Skills

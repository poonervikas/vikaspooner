import React from 'react';
import '../styles/about.css';
import '../styles/landing.css';
import pic from '../assets/images/mypic.jpg';
import CountUp from 'react-countup';

const About = () => {
    return (
        <div className="about-container">
            {/* <h1 className="about-heading"><span className="about">About</span> Me</h1> */}
            <br></br>
            <div>           
                 <img src={pic} className="my-pic" alt="vikas pooner" />
            </div>

            <p className="about-text">Hi, I'm Vikas. I am a{' '}
                <CountUp
                    start={1}
                    end={23}
                    duration="2"
                /> years old software engineer based in India. I started my career in IT Industry with a
                 Tech Giant and currently I am working as a Full Stack Developer and exploring Low Code Development in a FORTUNE 200 Fintech Company. When i am not developing, you can find me playing or watching cricket...</p>
            <hr className="separator-line" /><br />
            <h2 className="about-quote">{'< '}Living, Learning & Leveling up one day at a time{' />'}</h2>

        </div>
    )
}

export default About

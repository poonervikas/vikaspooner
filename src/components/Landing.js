import React from 'react'
import { PRETEXT, NAME, POSTTEXT, TYPEWRITER } from '../information/Landing';
import '../styles/landing.css';
import Typewriter from 'typewriter-effect';
import SocialIcons from './SocialIcons';



const Landing = () => {
    return (
        <div className="landing">

            <div>
                <p className="preText">
                    {PRETEXT}
                </p>
                <h1 className="name">
                    {NAME}
                </h1>
                <div className="typewriter-effect">
                    I'm a{' '}
                    <Typewriter
                        options={{
                            strings: TYPEWRITER,
                            autoStart: true,
                            loop: true,
                        }}
                    />

                </div>
                <h3 className="postText">
                    {POSTTEXT}
                </h3>
                <div className="social-icons">
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}

export default Landing;

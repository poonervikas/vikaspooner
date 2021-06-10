import React from 'react';
import { SOCIAL_ICONS_DATA } from '../information/Landing';
import '../styles/landing.css'

const SocialIcons = () => {
    return (
        <div className="social-icons-tray">
            {
            SOCIAL_ICONS_DATA.map(socialIconData => (
                <a
                className="social-icon"
                    href={socialIconData.url}
                    aria-label={socialIconData.label}
                    target="__blank"
                    key={socialIconData.url}
                >
                    <socialIconData.icon />
                </a>
            ))
            }
        

        </div>
    )
}

export default SocialIcons

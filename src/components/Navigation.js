import React from 'react';
import {navigationData} from '../information/Navigation';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';



const Navigation = () => {
    return (
        <div className="navigation-tray">
            {navigationData.map(navObj=>(
                <Link className="nav-link" key={navObj.navItemName} to={navObj.route}>{navObj.navItemName}</Link>
            ))}
            
        </div>
    )
}

export default Navigation

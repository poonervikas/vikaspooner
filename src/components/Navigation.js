import React from 'react';
import {navigationData} from '../information/Navigation';


const Navigation = () => {
    return (
        <div>
            {navigationData.map(navObj=>(
                <p>{navObj.navItemName}</p>
            ))}
        </div>
    )
}

export default Navigation

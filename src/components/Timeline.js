import React from 'react';
import '../styles/timeline.css'

const Timeline = (props) => {
    return (
       
            <div className={props.position%2===0?'Container left':'Container right'}>
                <div className="content">
                    <h3 className="title">{props.data.title}</h3>
                    <p className="organisation">{props.data.organisation}</p>
                    <p className="duration">{props.data.duration}</p>
                </div>
            </div>
    )
}

export default Timeline;

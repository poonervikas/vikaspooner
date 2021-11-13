import React from 'react'
import Timeline from './Timeline';
import { TIMELINE } from "../information/Timeline";

const Journey = () => {
    return (
        <div className="journey">
            {/* <h3 className="text-center">My Journey so far...</h3> */}
        <div className="timeline">
            {
                TIMELINE.map((timelineData,i)=>(
                    <Timeline data={timelineData} position={i+1}  />
                ))
            }
        </div>
        </div>
    )
}

export default Journey

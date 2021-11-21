import React from 'react';
import '../styles/error.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="container text-center error-container">
                <h1 className="text-center error404">OOPS!<span style={{color:"whitesmoke"}}> Error 404</span></h1>
                <div className="text-center">
                    <h3 className="text-center error-text">Looks like you're lost</h3>
                    <Link to='/' ><button className="btn-go">Go Back Home →</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Error

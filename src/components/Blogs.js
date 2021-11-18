import React from 'react';
import { BLOGSDATA } from '../information/Blog';
import Blog from './Blog';
import '../styles/blog.css';


const Blogs = () => {
    return (
        <div className="blogs-container ">
        <div className="blog-container">
            {BLOGSDATA.map(blog => (
                <Blog data={blog} key={blog.link} />
            ))}

        </div>
        </div>
    )
}

export default Blogs

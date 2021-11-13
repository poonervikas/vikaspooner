import React from 'react';
import { BLOGSDATA } from '../information/Blog';
import Blog from './Blog';
import '../styles/blog.css';


const Blogs = () => {
    console.log(BLOGSDATA)
    return (
        <div className="blogs-container ">
        <div className="blog-container">
            {BLOGSDATA.map(blog => (
                <Blog data={blog} />
            ))}

        </div>
        </div>
    )
}

export default Blogs

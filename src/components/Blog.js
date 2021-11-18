import React from 'react';
import '../styles/blog.css'
import Tag from './Tag';

const Blog = (props) => {
    return (
        <div>
            <a href={props.data.link} target="_blank" className="blog-title">{props.data.title}</a>
            <h5 className="blog-brief">{props.data.brief}</h5>
            <p className="blog-date">{props.data.date +' | '+ props.data.readTime +' read'}</p>
            <div className="tags-container">
                {props.data.tags.map(tag=>(
                    <Tag data={tag} key={tag} />
                ))}
            </div>
            <hr></hr>
        </div>
    )
}

export default Blog

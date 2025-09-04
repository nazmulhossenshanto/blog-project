import React, { useEffect, useState } from 'react';


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>This is from Blogs</h1>
        </div>
    );
};

export default Blogs;
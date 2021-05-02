import React from 'react';
import { blogs } from '../homepage/Blog';
import BlogPost from '../homepage/BlogPost';

const Blogs = () => {
    return (
        <section className='p-2 p-md-5'>
            <h2 className="heading">All of my blog posts</h2>
            <div className="row py-4">
                {
                    blogs.map(blog => <BlogPost key={blog.id} blog={blog} />)
                }
            </div>
        </section>
    );
};

export default Blogs;
import React from 'react';
import variable from '../../images/variable.png';
import resume from '../../images/resume.jpg';
import array from '../../images/array.jpg';
import BlogPost from './BlogPost';
import { Link } from 'react-router-dom';

export const blogs = [
    {
        id: 1,
        title: 'Let, var, const — no more confusion',
        img: variable,
        link: 'https://naimur-rahman-dev.medium.com/let-var-const-no-more-confusion-f69d4c97cbb2',
        tags: ['JavaScript', 'variable']
    },
    {
        id: 2,
        title: 'Ten Resume tips for newbie developer',
        img: resume,
        link: 'https://naimur-rahman-dev.medium.com/ten-resume-tips-for-newbie-and-fresher-software-developer-65b0afd9b187',
        tags: ['Developer', 'Resume']
    },
    {
        id: 3,
        title: 'Some useful array methods',
        img: array,
        link: 'https://naimur-rahman-dev.medium.com/some-useful-array-methods-6efb8271828',
        tags: ['JavaScript', 'array']
    }
]

const Blog = () => {
    const blogs2 = blogs.slice(0, 2);
    return (
        <section className='p-2 p-md-5'>
            <h2 className="heading">Some of my blog post</h2>
            <div className="row py-4">
                {
                    blogs2.map(blog => <BlogPost key={blog.id} blog={blog} />)
                }
            </div>
            <div className="text-center pb-3">
                <Link to='/blog'>
                    <button className="primary-btn">
                        All the posts
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Blog;
import React from 'react';

const BlogPost = ({ blog }) => {
    const { img, link, title, tags } = blog;
    return (
        <div className='col-md-6 blog-post'>
            <div className="m-3 blog-post__inner rounded shadow shadow-lg">
                <a href={link} target='_blank' rel='noreferrer'>
                    <img src={img} alt="title" />
                    <div className="p-3">
                        <h5 className='py-2'>{title}</h5>
                        <div className="d-block">
                            {
                                tags.map(tag => <span className='tag'>{tag}</span>)
                            }
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default BlogPost;
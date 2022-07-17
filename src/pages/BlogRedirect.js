import React, { useEffect } from 'react';

const BlogRedirect = () => {
  useEffect(() => {
    window.location = 'https://naimur-portfolio-blog.herokuapp.com/admin/'
  }, [])
  return (
    <div>
      <h1>This is blog</h1>
    </div>
  );
};

export default BlogRedirect;
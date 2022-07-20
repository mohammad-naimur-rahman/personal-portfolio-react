import React, { useEffect } from "react";

const BlogRedirect = () => {
  useEffect(() => {
    window.location = "https://naimur-portfolio-blog.herokuapp.com/admin/content-manager";
  }, []);
  return (
    <div className="text-center pt-5 mt-5">
      <h3>Redirecting to strapi blog admin...</h3>
    </div>
  );
};

export default BlogRedirect;

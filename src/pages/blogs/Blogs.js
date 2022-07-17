import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import BlogPost from "../homepage/BlogPost";
import { useQuery } from "react-query";
import { API_URL } from "../../configs";

const Blogs = () => {
  const location = useLocation();
  if (location.pathname === "/blog") {
    document.title = "Blog Posts | Naimur Rahman";
  }

  const { data } = useQuery("blogs", () => fetch(`${API_URL}/blogs?populate=*`).then((res) => res.json()));

  return (
    <motion.section
      className="p-2 p-md-5 blogs-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="heading">All of my blog posts</h2>
      <div className="row py-4">
        {data?.data.map((blog) => (
          <BlogPost key={blog.id} blog={blog} />
        ))}
      </div>
    </motion.section>
  );
};

export default Blogs;

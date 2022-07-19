import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import { Link } from "react-router-dom";
import { API_URL } from "../../configs";
import BlogSkeleton from "./BlogSkeleton";

const Blog = () => {
  const [blogs, setblogs] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    fetch(`${API_URL}/blogs?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        const first3 = data?.data.slice(0, 2);
        setblogs(first3);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setisLoading(false);
      });
  }, []);

  return (
    <section className="p-2 p-md-5">
      <h2 className="heading">Some of my blog post</h2>
      {isLoading ? (
        <div className="row py-4">
          {[0, 1].map((el) => (
            <BlogSkeleton key={el} />
          ))}
        </div>
      ) : null}
      <div className="row py-4">
        {blogs.map((blog) => (
          <BlogPost key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="text-center pb-3">
        <Link to="/blogs">
          <button className="primary-btn">All the posts</button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;

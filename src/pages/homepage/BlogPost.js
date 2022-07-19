import React from "react";
import { Link } from "react-router-dom";
const BlogPost = ({ blog }) => {
  const { cover, title, tags, slug } = blog?.attributes;
  const { name, url } = cover.data.attributes.formats.small;

  return (
    <div className="col-md-6">
      <div className="m-3 blog-post">
        <Link to={`/blog-post/${slug}`}>
          <img src={url} alt={name} />
          <div className="p-2">
            <h5>{title}</h5>
            {tags ? (
              <>
                {tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </>
            ) : null}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;

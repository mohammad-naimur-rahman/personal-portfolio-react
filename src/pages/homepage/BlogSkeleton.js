import React from "react";
import grayImg from "../../images/grey-img.png";

const BlogSkeleton = () => {
  return (
    <div className="col-md-6">
      <div className="m-3 blog-skeleton">
        <img src={grayImg} alt="blog post" />
        <div className="p-2">
          <div className="title">
            <div className="skeleton-el"></div>
          </div>
          {[0, 1, 2].map((el) => (
            <span key={el} className="tag">
              <div className="skeleton-el2"></div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;

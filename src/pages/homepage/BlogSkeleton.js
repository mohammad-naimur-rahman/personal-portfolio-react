import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogSkeleton = () => {
  return (
    <div className="col-md-6">
      <div className="m-3 blog-skeleton">
        <Skeleton duration={2.2} baseColor="rgba(0,0,0,0.4)" highlightColor="rgba(255,255,255,0.4)" className="img" />
        <div className="p-2">
          <Skeleton
            duration={2.2}
            width="100%"
            height="50px"
            baseColor="rgba(0,0,0,0.4)"
            highlightColor="rgba(255,255,255,0.4)"
          />
          {[0, 1, 2].map((el) => (
            <Skeleton
              duration={2.2}
              style={{ margin: "5px" }}
              key={el}
              inline={true}
              baseColor="rgba(0,0,0,0.4)"
              highlightColor="rgba(255,255,255,0.4)"
              width="60px"
              height="25px"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;

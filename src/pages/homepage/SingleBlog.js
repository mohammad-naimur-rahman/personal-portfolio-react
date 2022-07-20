import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../configs";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const SingleBlog = () => {
  const { slug } = useParams();
  const [blogpost, setblogpost] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const { title, tags, post } = blogpost;

  useEffect(() => {
    setisLoading(true);
    fetch(`${API_URL}/blogs?filters[slug]=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setblogpost(data.data[0].attributes);
        setisLoading(false);
      })
      .catch((err) => {
        setisLoading(false);
        console.log(err.message);
      });
  }, [slug]);

  if (isLoading) {
    return <h4 className="mt-5 pt-5 text-center">Post loading, Please wait...</h4>;
  }

  return (
    <div className="single-blog">
      <h1>{title}</h1>
      {tags ? (
        <>
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </>
      ) : null}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="markdown"
        children={post}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
      <Link to="/blogs">
        <button className="btn btn-primary mt-2">&larr; All Blogs</button>
      </Link>
    </div>
  );
};

export default SingleBlog;

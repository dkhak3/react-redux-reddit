import React from "react";
import "./post.css";
import { useSelector } from "react-redux";

const Post = () => {
  const posts = useSelector((state) => state.post.posts);
  const tags = ["None", "NSFW", "Mood", "Qoutes", "Shitpost"];

  return (
    <>
      <section className="post-container">
        {posts.slice(1)?.map((post, index) => (
          <div className="posts" key={index}>
            <p className="posts-title">{post.title}</p>
            <p className={`posts-tags-${tags[post.tag]} posts-tags`}>
              {tags[post.tag]}
            </p>
            <p className="posts-descripton">{post.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Post;

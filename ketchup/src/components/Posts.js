import React from "react";
import Posts_Body from "./Posts_Body";
import Post_Footer from "./Post_Footer";
import Post_Header from "./Post_Header";
import Post_Media from "./Post_Media";

function Posts() {
  return (
    <div className="post-main">
      Posts
      <Post_Header />
      <Posts_Body />
      <Post_Media />
      <Post_Footer />
      <div></div>
    </div>
  );
}

export default Posts;

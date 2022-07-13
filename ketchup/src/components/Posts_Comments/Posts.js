import React from "react";
import Posts_Body from "./Posts_Body";
import Post_Footer from "./Post_Footer";
import Post_Header from "./Post_Header";
import Post_Media from "./Post_Media";
import styled from 'styled-components';

function Posts() {
  return (
    <PostContainer>
      Posts
      <Post_Header />
      <Posts_Body />
      <Post_Media />
      <Post_Footer />
      <div></div>
    </PostContainer>
  );
}

export default Posts;

const PostContainer = styled.div`
display: flex;
background-color: #393939;
// padding-border: 100px;

`
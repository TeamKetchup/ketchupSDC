import React, { useEffect, useState } from "react";
import Posts_Body from "./Posts_Body";
import Post_Footer from "./Post_Footer";
import Post_Header from "./Post_Header";
import Post_Media from "./Post_Media";
import styled from 'styled-components';

function Posts() {

  const [searchPosts, setPosts] = useState(null)
  const [searchComments, setComments] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState("")

  useEffect(() => {
    loadPosts()
  }, [])

  function loadPosts() {
 
    
    setLoadingMessage("App is Loading");
    fetch("http://localhost:3025/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
    setLoading(false);
  }


  return (

    // {}

    <PostContainer>
      Posts
      
      {!searchPosts && <Loading>Loading....</Loading>} 
      {searchPosts && <Posts_Body searchPosts={searchPosts} />}
     
      
      <div></div>
    </PostContainer>
  );
}

export default Posts;

const PostContainer = styled.div`
display: flex;
flex-direction: column;

`
const Loading = styled.div`
display: flex;
color: white;

`
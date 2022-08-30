import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Posts_Body from "./Posts_Body";
import styled from 'styled-components';

function Posts({ user }) {
  const { id } = useParams();
  const [searchPosts, setPosts] = useState(null)

  const [searchComments, setComments] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState("")

  useEffect(() => {
    loadPosts()
  }, [])

  function loadPosts() {


    setLoadingMessage("App is Loading");
    // fetch(`http://localhost:3025/api/allposts`)
    fetch(`https://ketchup-db.herokuapp.com/api/allposts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
    setLoading(false);
  }


  return (

    // {}

    <PostContainer className="post-container">
      {!searchPosts && <Loading>Loading....</Loading>}
      {searchPosts && <Posts_Body user={user} searchPosts={searchPosts} />}
    </PostContainer>
  );
}

export default Posts;

const PostContainer = styled.div`
/* display: flex; */
/* flex-direction: column; */
/* justify-content: center;
align-items: center; */
/* width: 40% */

`
const Loading = styled.div`
display: flex;
color: white;

`
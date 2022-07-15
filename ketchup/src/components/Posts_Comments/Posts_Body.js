import React from "react";
import styled from 'styled-components';
import PostsItem from "./PostsItem";

function Posts_Body({searchPosts}) {
  console.log(searchPosts)
  return (
    <PostContent className="post-content">
      {/* <div><img src="./KETCHUP.png"></img></div> */}
      
        <PostBody className="post-body">
        {searchPosts.map((data) => (
            <PostsItem

              id={data.id}
              post_header={data.post_header}
              post_body={data.post_body}
              media={data.media}
              date={data.date}
              user_id={data.user_id}
              community_id={data.community_id}
             
            />
          ))}
          
        </PostBody>
        <div>
            
        </div>
      
    </PostContent>
  );
}

export default Posts_Body;

const PostBody = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
/* width: 500px; */

color: white;

`

const PostContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
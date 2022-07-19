import React from "react";
import styled from 'styled-components';
import PostsItem from "./PostsItem";
import Comments from "../Comments";

function Posts_Body({searchPosts, searchComments}) {
  console.log(searchPosts, searchComments)
  return (
    <PostContent className="post-content">
      {/* <div><img src="./KETCHUP.png"></img></div> */}

      <PostBody className="post-body">
        
        {searchPosts.map((data, index) => (
          <PostsItem

            key={index}
            id={data.id}
            post_header={data.post_header}
            post_body={data.post_body}
            img={data.img}
            
            date={data.date}
            user_id={data.user_id}
            community_id={data.community_id}
            username={data.username}
            avatar={data.avatar}


          />
        ))}
         
        {searchComments.map((data, index) => (
          <Comments 
          key={index}
          id ={data.id}
          comment={data.comment_body}
          comment_user_id={data.users_id}
          comment_post_id={data.posts_id}
          
          />
        ))}
        
        
      </PostBody>
      <div>
          <Comments />
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
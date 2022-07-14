import React from "react";
import styled from 'styled-components';
import PostsItem from "./PostsItem";

function Posts_Body({searchPosts}) {
  console.log(searchPosts)
  return (
    <div className="post-content">
      {/* <div><img src="./KETCHUP.png"></img></div> */}
      <div className="post-body">
        <PostBody>
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
            <div>
                <button></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Posts_Body;

const PostBody = styled.div`
display: flex;
flex-direction: column;

color: white;
// padding-border: 100px;


`
import React from "react";
import styled from "styled-components";
// import avatar from '../icons/avatar';
import {BiLike, BiDislike, BiCommentAdd} from 'react-icons/bi'
import { Link } from "react-router-dom"

function PostsItem({
  key,
  id,
  post_header,
  post_body,
  img,
  video,
  date,
  user_id,
  community_id,
  username,
  avatar,
}) {

  console.log(img, video)
  return (
    <PostItemContainer className="post-1" key={id}>
      <HeaderContainer className='postheader'>
        <a
          click-id="subreddit-id"
          className="subreddit-name"
          href="/posts/" 
        >
          <HeaderImg src={avatar} alt="" />
        </a>
        <h1>{post_header}</h1>
        <div></div>
      </HeaderContainer >
      <PBodyContainer>
        {post_body}
        <PostMediaContainer>
      <Img className="post-img" src={`${img}`}/>
      {/* <Video controls className="post-video" src={`${video}`}/> */}
      </PostMediaContainer>
      </PBodyContainer>
      
      <PostFooter>
        <div>
          <FooterItems className="footer-items">
            
            <PostIcons className="post-icons">
            {/* <FaShare className="share-button"/> share
            <div><SpaceDiv className="space"></SpaceDiv></div>
            <FaBookmark className="save-button"/>save */}
            <div><SpaceDiv className="space"></SpaceDiv></div>
            <BiLike className="like-button"/> Like
            <div><SpaceDiv className="space"></SpaceDiv></div>
            <BiDislike className="dislike-button"/> DisLike
            <div><SpaceDiv className="space"></SpaceDiv></div>
            <CommentLink to={`/createcomment`}><BiCommentAdd className="comment-button"/>Comment</CommentLink>
            </PostIcons>
            
            <div className="_21pmAV9gWG6F_UKVe7YIE0"></div>
          </FooterItems>
        </div>
      </PostFooter>
    </PostItemContainer>
  );
}

export default PostsItem;

const PostItemContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #393939;
color: white;
margin-top: 20px;
margin-right: 40px;
width: 450px;
height: auto;
text-align:center;
border-radius: 25px; 
`;

const SpaceDiv = styled.div`
width: 10px;
`
const PBodyContainer = styled.div`
font-weight: 500;
font-family: 'Oswald', sans-serif;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: red;
  font-family: 'Oswald', sans-serif;
`;

const HeaderImg = styled.img`
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 100%;
  height: 40px;
  margin-right: 4px;
  vertical-align: middle;
  justify-content: left;
  width: 40px;
  background-color: rgb(204, 204, 204);
  
  

`;
const PostMediaContainer = styled.div`

`;

const PostFooter = styled.div`
/* display: flex;
flex-direction: row; */
`;

const FooterItems = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

const PostIcons = styled.div`
display: flex;
margin: 10px;
font-size: 20px;

`
const Img = styled.img`
max-width:100%;
max-height:100%;

`

const Video = styled.video`
max-width:100%;
max-height:100%;

`
const CommentLink = styled(Link)`
/* cursor: pointer; */
    color: white;
    :hover {
        color: #FF0000;
        cursor: pointer;
    }
`
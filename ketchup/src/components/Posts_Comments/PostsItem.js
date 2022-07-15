import React from "react";
import styled from "styled-components";
import avatar from "./joshua.png";
import {FaShare, FaBookmark, FaFlag} from 'react-icons/fa'
import {BiHide} from 'react-icons/bi'

function PostsItem({
  key,
  id,
  post_header,
  post_body,
  media,
  date,
  user_id,
  community_id,
}) {
  return (
    <PostItemContainer className="post-1">
      <HeaderContainer className='postheader'>
        <a
          click-id="subreddit-id"
          className="subreddit-name"
          href="/posts/" 
        >
          <HeaderImg src={avatar} alt="image" />
        </a>
        <h1>{post_header}</h1>
        <div></div>
      </HeaderContainer >
      <PBodyContainer>
        {post_body}
        <PostMediaContainer>
      <Img className="post-img" src={media}/>
      </PostMediaContainer>
      </PBodyContainer>
      
      <PostFooter>
        <div>
          <FooterItems className="footer-items">
            
            <PostIcons className="post-icons">
            <FaShare className="share-button"/> share
            <div><SpaceDiv className="space"></SpaceDiv></div>
            <FaBookmark className="save-button"/>save
            <div><SpaceDiv className="space"></SpaceDiv></div>
            <BiHide className="hide-button"/> hide
            <div><SpaceDiv className="space"></SpaceDiv></div>
            <FaFlag className="report-button"/>report
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
width: 45%;
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
import React from "react";
import styled from "styled-components";
import avatar from "./avatar.png";
import {FaShare, FaBookmark, FaFlag} from 'react-icons/fa'
import {BiHide} from 'react-icons/bi'

function PostsItem({
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
          href="/k/TeamKetchup"
        >
          <HeaderImg src={avatar} alt="image" />
        </a>
        <h1>{post_header}</h1>
      </HeaderContainer >
      <PBodyContainer>{post_body}</PBodyContainer>
      <PostMediaContainer>{media}</PostMediaContainer>
      <PostFooter>
        <div>
          <FooterItems className="footer-items">
            
            <PostIcons className="post-icons">
            <FaShare className="share-button"/>
            <FaBookmark className="save-button"/>
            <BiHide className="hide-button"/>
            <FaFlag className="report-button"/>
            </PostIcons>
            
            <div class="_21pmAV9gWG6F_UKVe7YIE0"></div>
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
    margin-top: 10px;
    /* width: 40%; */
    text-align:center;
    border-radius: 5px;
    padding: 25px;
    
    
    
`;

const PBodyContainer = styled.div`

`;

const HeaderContainer = styled.div`
  /* display: flex; */
`;

const HeaderImg = styled.div`
  /* margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  border-radius: 100%;
  display: inline-block;
  height: 20px;
  margin-right: 4px;
  vertical-align: middle;
  width: 20px; */
  // background-color: rgb(0, 121, 211);
`;
const PostMediaContainer = styled.div``;

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
size: ;
justify-content: space-between;
`

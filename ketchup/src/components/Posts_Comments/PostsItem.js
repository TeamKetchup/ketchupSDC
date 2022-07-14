import React from 'react'
import styled from 'styled-components'
import avatar from './avatar.png'

function PostsItem(
    {id,
    post_header,
    post_body,
    media,
    date, 
    user_id, 
    community_id}) {
  return (
    
    <PostItemContainer className='post-1'>
        <HeaderContainer>
    <a click-id="subreddit-id" className='subreddit-name' href='/k/TeamKetchup'>
        
        <HeaderImg src={avatar} alt="image"/> 
    </a>
    <h1>{post_header}</h1>
    </HeaderContainer>
        <PBodyContainer>{post_body}</PBodyContainer>
        <PostMediaContainer>{media}</PostMediaContainer>
    </PostItemContainer>
  )
}

export default PostsItem

const PostItemContainer = styled.div`
display: flex;
flex-direction: column;
background-color: #393939;
color: white;

margin: 0;
padding: 0;
font: inherit;
vertical-align: baseline;
background-color: #FFFFFF;
color: #878A8C;
position: relative;
--post-line-color: #ccc;
border: 1px solid #ccc;
margin-bottom: 10px;
overflow: hidden;
--post-icon-color: #898989;
transition: color .5s,fill .5s,box-shadow .5s;
cursor: pointer;
border-radius: 4px;
padding-left: 40px;

`

const PBodyContainer = styled.div`

color: var(--newCommunityTheme-actionIcon);
--post-line-color: var(--newCommunityTheme-postLine);
--post-icon-color: var(--newCommunityTheme-postIcon);
cursor: pointer;
padding: 0;
border: 0;
font: inherit;
vertical-align: baseline;
margin: 0 8px;
--posttitletextcolor: #222222;
--postTitle-VisitedLinkColor: #9b9b9b;
--postTitleLink-VisitedLinkColor: #9b9b9b;

`

const HeaderContainer = styled.div`
display: flex;


`

const HeaderImg = styled.div`
margin: 0;
padding: 0;
border: 0;
font: inherit;
border-radius: 100%;
display: inline-block;
height: 20px;
margin-right: 4px;
vertical-align: middle;
width: 20px;
// background-color: rgb(0, 121, 211);

`
const PostMediaContainer = styled.div`

`
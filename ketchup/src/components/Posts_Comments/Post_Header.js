import React from 'react'
import styled from 'styled-components';

function Post_Header() {
  return (
    <HeaderContainer>
    <a click-id="subreddit-id" className='subreddit-name' href='/k/TeamKetchup'>
        
        <HeaderImg src="https://styles.redditmedia.com/t5_35n7t/styles/communityIcon_cn66l18a5zf51.png?width=256&s=9f22c26f97fe29afcf4e74cdb5fda3b6cc8852d2" alt="image"/> 
    </a>
    </HeaderContainer>
  )
}

export default Post_Header

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
background-color: rgb(0, 121, 211);

`
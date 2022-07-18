import React from 'react'
import Header from './header'
import './LandingPage.css'
import Posts from './Posts_Comments/Posts'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SubscribedCommunities from './ProfilePage/SubscribedCommunities'
import './LandingPage.css'


const landingPage = ({ communities, user }) => {


  return (

    <>
      <PageContainer>
        <PostContainer>
          <Posts />
        </PostContainer>
        <CommunityContainer>
          <SubscribedCommunities communities={communities} />
        </CommunityContainer>
      </PageContainer>
    </>

  )
}



export default landingPage;


const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 100px;
`


const PostContainer = styled.div`
    width: 70%;
    justify-content: center;
    align-items: center;
`

const CommunityContainer = styled.div`
    width: 30%;
    justify-content: center;
    align-items: center;
    color: white;

`

import React from 'react'

import './LandingPage.css'
import Posts from './Posts_Comments/Posts'
import styled from 'styled-components'

import SubscribedCommunities from './ProfilePage/SubscribedCommunities'
import './LandingPage.css'


const landingPage = ({ communities, user }) => {

  // console.log(user)
  return (

    <>
    {/* <Header user={user}/> */}
    <div className='landing'>
      <div className='landingleft'>
        <Posts />
      </div>  
    <div className='landingright'>
      <div className='communities'>
      <SubscribedCommunities communities={communities} />
      </div>
        
        {/* <div>
        <h2>Communities</h2>
        <hr></hr>
        <p>cars</p>
        <p>news</p>
        <p>sports</p>
        </div> */}
        </div>

      </div>


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

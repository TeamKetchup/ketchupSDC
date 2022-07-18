import React from 'react'
import Header from './header'
import './LandingPage.css'
import Posts from './Posts_Comments/Posts'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SubscribedCommunities from './ProfilePage/SubscribedCommunities'
import './LandingPage.css'


const landingPage = ({ communities, user }) => {

  // console.log(user)
  return (

    <>
    {/* <Header user={user}/> */}
    <div className='landing'>
        <Posts />
    <div className='communities'>
        <SubscribedCommunities communities={communities} />
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



export default landingPage

const AllCommunitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #393939;
    min-width: 13%;
    min-height: 350px;
    border-radius: 25px;
    padding: 20px;
    width: 50%;
    /* height: 100%; */
    font-size: 18px;
    color: white;
    margin: 80px;
    font-family: 'oswald, san serif'
`
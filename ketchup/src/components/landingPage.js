import React from 'react'
import Header from './header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AllCommunities from './Communities/AllCommunities'
import './LandingPage.css'

function landingPage(allCommunities) {



  return (

    <>
      <Header />
      <div className='landing'>
        <div>
          <h4>user</h4>
          <p>post</p>
        </div>
      </div>
      <AllCommunitiesContainer>
        <AllCommunities communities={allCommunities.allCommunities} />
      </AllCommunitiesContainer>




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
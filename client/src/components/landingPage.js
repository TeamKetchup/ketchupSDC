import React from 'react'
import './LandingPage.css'
import Posts from './Posts_Comments/All_Posts/Posts'
import styled from 'styled-components'
import SubscribedCommunities from './ProfilePage/SubscribedCommunities'
import './LandingPage.css'
import { Link } from 'react-router-dom'

const landingPage = ({ communities, user }) => {

  // console.log(user)
  return (

    <>
      {/* <Header user={user}/> */}
      <div className='landing'>
        <div className='landingleft'>
          {/* <Link to='/createpost'><Button>Create Post</Button></Link> */}
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
const Button = styled.button`
    width: 300px;
    align-self: center;
    color: black;
    padding: 8px;
    cursor: pointer;
    display: flex;
    box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
    justify-content: center;
    align-items: center;
    align-content: center;
    font-family: 'Pacifico', cursive;
    font-size: 17px;
    border: transparent;
    background-color: white;
    border-radius: 999px;
    margin: 10px;
    :hover {
        background-color: #FF0000;
        transform: scale(1.1);
        color: white;
        border-radius: 999px;
    }
`
import React from 'react'
import Header from './Header/header'
import './LandingPage.css'
import SubscribedCommunities from './ProfilePage/SubscribedCommunities'

const landingPage = ({communities, user}) => {

  console.log(user)
  return (
    
    <>
    {/* <Header user={user}/> */}
    <div className='landing'>
      <div className='landingPageUserPosts'>
          <h4>user</h4>
          <p>post</p>
      </div>
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
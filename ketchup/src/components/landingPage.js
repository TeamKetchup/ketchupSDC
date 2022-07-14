import React from 'react'
import Header from './header'
import './LandingPage.css'
import SubscribedCommunities from './ProfilePage/SubscribedCommunities'

function landingPage(communities) {

  return (
    
    <>
    <Header/>
    <div className='landing'>
      <div className='landingPageUserPosts'>
          <h4>user</h4>
          <p>post</p>
      </div>
      <div className='communities'>
        <SubscribedCommunities communities={communities.communities} />
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

import './index.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import LogInPage from './components/LogInSignUp/LogInPage';
import SignUpPage from './components/LogInSignUp/SignUpPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LandingPage from './components/landingPage';
import Header from './components/header';
import { useState, useEffect, useLocalStorage } from 'react';
import styled from 'styled-components';
import CommunityPage from './components/Communities/CommunityPage';
import usePersistedState from 'use-persisted-state-hook'



function App() {
  // const [community, setCommunity] = useState(null);
  //fetch request for a join table between community/posts/comments table
  const [user, setUser] = useState(false)
  const [currentuser, setCurrentUser] = usePersistedState('currentuser',[])
  const [profileInfo, setProfileInfo] = useState(false);
  const [subscribedCommunities, setSubscribedCommunities] = useState(false);

  console.log(user[0])
  useEffect(() => {
    fetchProfileInfo();
    fetchSubscribedCommunities();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const response = await fetch(`http://localhost:3025/api/profileinfo/1`);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        )
      }
      let actualData = await response.json();
      setProfileInfo(actualData);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchSubscribedCommunities = async () => {
    try {
      const response = await fetch(`http://localhost:3025/api/subscribedcommunities/1`);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        )
      }
      let actualData = await response.json();
      setSubscribedCommunities(actualData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BrowserRouter>
      <div className="App">

      {!user ? (
        <>
          {/* <LogInPage setUser={setUser}/> */}
          <Routes>
            <Route path='/' element={<LogInPage setUser={setUser}/>} />
            <Route path='/signuppage' element={<SignUpPage user={user}/>} />
          </Routes>
        </>

      ) : (
        <>
        {user && <Header user={user}/>}
        <Routes>
          <Route path='/' element={
          <>
          {subscribedCommunities && user && <LandingPage communities={subscribedCommunities} user={user} />} 
          </>
          } />
          <Route path='/loginpage' element={<LogInPage />} />
          <Route path='/signuppage' element={<SignUpPage user={user}/>} />
          {/* <Route path='/' element={<HomePage />} /> */}
          {/* <Route path='/community' element={<Community />}/> */}
          <Route path='/userprofile' element={
            <>
              {/* {profileInfo && subscribedCommunities && user && <Header user={user} />} */}
              {profileInfo && subscribedCommunities && <ProfilePage profileInfo={profileInfo} subscribedCommunities={subscribedCommunities} />}
            </>

          } />
          <Route path={`/community/:id`} element={
            <>
              {/* {user && <Header user={user}/>} */}
              {subscribedCommunities && <CommunityPage communities={subscribedCommunities} />}
            </>
          }
          />
        </Routes>
        </>
      )}

    </div>
    </BrowserRouter>
  );
}

const Test = styled.h1`
  color: white;
`

export default App;

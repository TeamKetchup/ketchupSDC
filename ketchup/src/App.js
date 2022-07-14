
import './index.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import LogInPage from './components/LogInSignUp/LogInPage';
import SignUpPage from './components/LogInSignUp/SignUpPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LandingPage from './components/landingPage';
import Header from './components/header';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommunityPage from './components/Communities/CommunityPage';



function App() {
  // const [community, setCommunity] = useState(null);
  //fetch request for a join table between community/posts/comments table

  const [profileInfo, setProfileInfo] = useState(false);
  const [allCommunities, setallCommunities] = useState(false);

  useEffect(() => {
    fetchProfileInfo();
    fetchallCommunities();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/profileinfo/1`);
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

  const fetchallCommunities = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/allcommunities`);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        )
      }
      let actualData = await response.json();
      setallCommunities(actualData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={allCommunities && <LandingPage allCommunities={allCommunities} />} />
          <Route path='/loginpage' element={<LogInPage />} />
          <Route path='/signuppage' element={<SignUpPage />} />
          {/* <Route path='/' element={<HomePage />} /> */}
          {/* <Route path='/community' element={<Community />}/> */}
          <Route path='/userprofile' element={
            <>
              {profileInfo && allCommunities && <Header />}
              {profileInfo && allCommunities && <ProfilePage profileInfo={profileInfo} allCommunities={allCommunities} />}
            </>

          } />
          <Route path={`/community/:id`} element={
            <>
              <Header />
              {allCommunities && <CommunityPage communities={allCommunities} />}
            </>
          }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Test = styled.h1`
  color: white;
`

export default App;

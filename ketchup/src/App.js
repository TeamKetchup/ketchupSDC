import "./App.css";
import axios from "axios";
import SubmitFile from "./components/SubmitFile";
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPage from './components/LogInSignUp/LogInPage';
import SignUpPage from './components/LogInSignUp/SignUpPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Posts from './components/Posts_Comments/Posts';
import LandingPage from './components/landingPage';
import Header from './components/Header/header';
import { useState, useEffect } from 'react';
import CommunityPage from './components/Communities/CommunityPage';
// import usePersistedState from 'use-persisted-state-hook'
import CreateCommunity from './components/Communities/CreateCommunity';
import loadingGif from "./components/LogInSignUp/loading.gif"
import CreatePost from "./components/Posts_Comments/CreatePost";



function App() {
  // const sumbitAvatar = async (file) => {

  //   const formData = new FormData();
  //   formData.append("file", file);
  //   await axios.post("http://localhost:3025/api/postimage", formData);
  // }
  // const [community, setCommunity] = useState(null);
  //fetch request for a join table between community/posts/comments table
  const [user, setUser] = useState(false)
  const [loading, setLoading] = useState(true);
  // const [currentuser, setCurrentUser] = usePersistedState('currentuser',[])
  const [profileInfo, setProfileInfo] = useState(false);
  const [subscribedCommunities, setsubscribedCommunities] = useState(false);

  // console.log(user[0])
  useEffect(() => {
    // fetchProfileInfo();
    fetchsubscribedCommunities();
  }, [])

  const fetchsubscribedCommunities = async () => {
    try {
      const response = await fetch(`http://localhost:3025/api/allcommunities`);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        )
      }
      let actualData = await response.json();
      setsubscribedCommunities(actualData);
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
              <Route path='/' element={<LogInPage setLoading={setLoading} setUser={setUser} />} />
              <Route path='/signuppage' element={<SignUpPage user={user} />} />
              <Route path='/posts' element={<Posts />}/>
              <Route path='/createpost' element={<CreatePost />}/>
            </Routes>
          </>

        ) : (
          <>
            {user && <Header user={user} setUser={setUser} />}
            <Routes>
              <Route path='/' element={
                <>
                  {subscribedCommunities && user && <LandingPage communities={subscribedCommunities} user={user} />}
                </>
              } />
              <Route path='/loginpage' element={<LogInPage />} />
              <Route path='/signuppage' element={<SignUpPage user={user} />} />
              <Route path='/posts' element={<Posts />}/>
              {/* <Route path='/' element={<HomePage />} /> */}
              {/* <Route path='/community' element={<Community />}/> */}
              <Route path='/userprofile' element={
                <>
                  {/* {profileInfo && subscribedCommunities && user && <Header user={user} />} */}
                  {subscribedCommunities && <ProfilePage user={user} subscribedCommunities={subscribedCommunities} />}
                </>

              } />
              <Route exact path={`/createcommunity`} element={
                <CreateCommunity />
              }
              />
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
export default App;

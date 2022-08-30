import "./App.css";
import axios from "axios";
import SubmitFile from "./components/SubmitFile";
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPage from './components/LogInSignUp/LogInPage';
// import SignUpPage from './components/LogInSignUp/SignUpPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Posts from './components/Posts_Comments/All_Posts/Posts';
import LandingPage from './components/landingPage';
import Header from './components/Header/header';
import { useState, useEffect } from 'react';
import CommunityPage from './components/Communities/CommunityPage';
import CreateCommunity from './components/Communities/CreateCommunity';
import Register from "./components/LogInSignUp/Register";
import loadingGif from "./components/LogInSignUp/loading.gif"
import CreatePost from "./components/Posts_Comments/CreatePost";
import AccountDeleted from "./components/LogInSignUp/AccountDeleted";



function App() {

  const [user, setUser] = useState('')
  const [profileInfo, setProfileInfo] = useState(false);
  const [subscribedCommunities, setsubscribedCommunities] = useState(false);
  const [loading, setLoading] = useState(true);

  // console.log(user[0])
  useEffect(() => {
    // fetchProfileInfo();
    fetchsubscribedCommunities();
  }, [])

  const fetchsubscribedCommunities = async () => {
    try {
      // const response = await fetch(`http://localhost:3025/api/allcommunities`);
      const response = await fetch(`https://ketchup-db.herokuapp.com/api/allcommunities`);
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

  //  if(loading === true){
  //   return(
  //       <div>loading...</div>
  //   )
  //  } else {
  return (
    // <BrowserRouter>
    <div className="App">


      {!user ? (
        <>
          <Routes>
            <Route path='/' element={<LogInPage setLoading={setLoading} setUser={setUser} />} />
            <Route path='/register' element={<Register user={user} setUser={setUser} />} />
            <Route path='/posts' element={<Posts />} />

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
            <Route path='/deleted' element={<AccountDeleted />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/createpost' element={<CreatePost />} />
            <Route path='/userprofile' element={
              <>
                {user && setUser && subscribedCommunities && <ProfilePage user={user} setUser={setUser} subscribedCommunities={subscribedCommunities} />}
              </>

            } />
            <Route path={`/createpost/:userID/:communityID`} element={<CreatePost />} />
            <Route exact path={`/createcommunity`} element={
              <CreateCommunity user={user} />
            }
            />
            <Route path={`/community/:id`} element={
              <>
                {subscribedCommunities && user && <CommunityPage communities={subscribedCommunities} user={user} />}
              </>
            }
            />

          </Routes>

        </>
        //   )}
        // </>
      )}

    </div>
    // </BrowserRouter>
  );

}
export default App;

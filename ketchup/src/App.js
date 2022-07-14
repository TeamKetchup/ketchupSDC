import "./App.css";
import axios from "axios";
import SubmitFile from "./components/SubmitFile";
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPage from './components/LogInSignUp/LogInPage';
import SignUpPage from './components/LogInSignUp/SignUpPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LandingPage from './components/landingPage';
import Header from './components/header';
import { useState } from 'react';



function App() {
  // const sumbitAvatar = async (file) => {
    
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   await axios.post("http://localhost:3025/api/postimage", formData);
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/loginpage' element={<LogInPage />} />
          <Route path='/signuppage' element={<SignUpPage />} />
          {/* <Route path='/' element={<HomePage />} /> */}
          {/* <Route path='/community' element={<Community />}/> */}
          <Route path='/userprofile' element={
            <>
              <Header />
              <ProfilePage />
            </>

          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LogInPage from './components/LogInSignUp/LogInPage';
import SignUpPage from './components/LogInSignUp/SignUpPage';
import LandingPage from './components/landingPage';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/loginpage' element={<LogInPage />}/>
            <Route path='/signuppage' element={<SignUpPage />}/>
            // {/* <Route path='/' element={<HomePage />}/> */}
            // {/* <Route path='/community' element={<Community />}/> */}
            // {/* <Route path='/userprofile' element={<UserProfile />}/> */}
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

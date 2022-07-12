import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LogInPage from './Components/LogInSignUp/LogInPage';
import SignUpPage from './Components/LogInSignUp/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Routes>
            <Route path='/loginpage' element={<LogInPage />}/>
            <Route path='/signuppage' element={<SignUpPage />}/>
            {/* <Route path='/homepage' element={<HomePage />}/> */}
            {/* <Route path='/community' element={<Community />}/> */}
            {/* <Route path='/userprofile' element={<UserProfile />}/> */}
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

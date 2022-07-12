import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LogInPage from './components/LogInSignUp/LogInPage';
import SignUpPage from './components/LogInSignUp/SignUpPage';
import ProfilePage from './components/ProfilePage/ProfilePage';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path='/loginpage' element={<LogInPage />} />
          <Route path='/signuppage' element={<SignUpPage />} />
          {/* <Route path='/' element={<HomePage />} /> */}
          {/* <Route path='/community' element={<Community />}/> */}
          <Route path='/userprofile' element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import './App.css';
import LogInPage from './components/LogInSignUp/LogInPage';
import SignUpPage from './components/LogInSignUp/SignUpPage';

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        {/* <Posts /> */}
        <Routes>
            <Route path='/loginpage' element={<LogInPage />}/>
            <Route path='/signuppage' element={<SignUpPage />}/>
            {/* <Route path='/' element={<HomePage />}/> */}
            {/* <Route path='/community' element={<Community />}/> */}
            {/* <Route path='/userprofile' element={<UserProfile />}/> */}
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

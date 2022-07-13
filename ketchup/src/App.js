import "./App.css";
import axios from "axios";
import SubmitFile from "./components/SubmitFile";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LogInPage from './components/LogInSignUp/LogInPage';
import SignUpPage from './components/LogInSignUp/SignUpPage';

function App() {
  const fetchSubmit = async (file) => {
    
    const formData = new FormData();
    formData.append("file", file);
    await axios.post("http://localhost:3025/api/postimage", formData);
  }
  return (
    <BrowserRouter>
      <div className="App">
      {/* <>
        <SubmitFile fetchSubmit={fetchSubmit} />
      </> */}
        {/* <Header /> */}
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

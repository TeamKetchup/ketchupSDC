import './App.css';
import ProfilePage from './ProfilePage';
import { useState, useEffect } from "react";

function App() {

  const [profileInfo, setProfileInfo] = useState('');
  const [subscribedCommunities, setsubscribedCommunities] = useState('');

  useEffect(() => {
    fetchProfileInfo();
    fetchsubscribedCommunities();
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

  const fetchsubscribedCommunities = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/subscribedcommunities`);
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
    <div className="App">
      {profileInfo && subscribedCommunities && <ProfilePage userInfo={profileInfo[0]} subscribedCommunities={subscribedCommunities[0]} />}
    </div>
  );
}

export default App;

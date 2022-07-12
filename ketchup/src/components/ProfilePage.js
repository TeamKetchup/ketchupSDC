import ProfileCard from "./ProfileCard";
import SubscribedCommunities from "./SubscribedCommunities";
import styled from 'styled-components';
import { useState, useEffect } from "react";


const ProfilePage = (props) => {

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
        <ProfilePageContainer>
            {profileInfo && <ProfileCard userInfo={profileInfo[0]} />}
            {subscribedCommunities && <SubscribedCommunities communities={subscribedCommunities[0]} />}
        </ProfilePageContainer>
    );
}

export default ProfilePage;

const ProfilePageContainer = styled.div`

`
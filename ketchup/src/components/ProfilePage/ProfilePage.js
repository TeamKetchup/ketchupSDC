import ProfileCard from "./ProfileCard";
import SubscribedCommunities from "./SubscribedCommunities";
import styled from 'styled-components';
import { useState, useEffect } from "react";


const ProfilePage = (props) => {

    const [profileInfo, setProfileInfo] = useState('');
    const [subscribedCommunities, setsubscribedCommunities] = useState('');

    useEffect(() => {
        fetchProfileInfo();
        fetchSubscribedCommunities();
    }, []);

    const fetchProfileInfo = async () => {
        try {
            const response = await fetch(`http://localhost:3025/api/profileinfo/1`);
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

    const fetchSubscribedCommunities = async () => {
        try {
            const response = await fetch(`http://localhost:3025/api/subscribedcommunities/1`);
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

            <UserContentContainer>

            </UserContentContainer>
            <CardContainer>
                {profileInfo && <ProfileCard userInfo={profileInfo[0]} />}
                {subscribedCommunities && <SubscribedCommunities communities={subscribedCommunities} />}
            </CardContainer>

        </ProfilePageContainer>
    );
}

export default ProfilePage;

const ProfilePageContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const UserContentContainer = styled.div`
    width: 70%;
    justify-content: center;
`

const CardContainer = styled.div`
    width: 30%;
    justify-content: center;
    align-items: center;
`
import ProfileCard from "./ProfileCard";
import SubscribedCommunities from "./SubscribedCommunities";
import styled from 'styled-components';
import { useState, useEffect } from "react";


const ProfilePage = ({ user, subscribedCommunities }) => {
    console.log(user)

    

    return (
        <ProfilePageContainer>

            <UserContentContainer>
            
            </UserContentContainer>
            <CardContainer>
                {/* {!profileInfo && <Loading>loading...</Loading>} */}
                <ProfileCard user={user} />
                <SubscribedCommunities communities={subscribedCommunities} />
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
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    justify-content: center;
    align-items: center;
`

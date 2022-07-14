import ProfileCard from "./ProfileCard";
import AllCommunities from "../Communities/AllCommunities";
import styled from 'styled-components';
import { useState, useEffect } from "react";


const ProfilePage = ({ profileInfo, allCommunities }) => {

    return (
        <ProfilePageContainer>

            <UserContentContainer>

            </UserContentContainer>
            <CardContainer>
                {/* {!profileInfo && <Loading>loading...</Loading>} */}
                <ProfileCard profileInfo={profileInfo} />
                <AllCommunities communities={allCommunities} />
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
    align-items: center;
`

const CardContainer = styled.div`
    width: 30%;
    justify-content: center;
    align-items: center;
`

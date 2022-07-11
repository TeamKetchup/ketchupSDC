import React from 'react';
import styled from 'styled-components';

const ProfileCard = (props) => {

    return (
        <ProfileCardContainer className="side-card" >
            <ProfileCardHeader>
                <ProfileAvatar src={props.avatar} ></ProfileAvatar>
                <ProfileName>{props.username}</ProfileName>
            </ProfileCardHeader>
            <Bio>
                Bio: {props.bio}
            </Bio>
        </ProfileCardContainer >
    );
}

export default ProfileCard;

const ProfileCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #393939;
    min-width: 20%;
    min-height: 350px;
    border-radius: 25px;
    padding: 20px;
    width: 200px;
    height: 150px;
    font-size: 14px; 
    color: white;
`

const ProfileCardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`

const ProfileAvatar = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 999px;
`

const ProfileName = styled.h3`
    text-align: right;
    padding-right: 30px;
`

const Bio = styled.p`
    text-align: center;
    max-width: 90%;
`
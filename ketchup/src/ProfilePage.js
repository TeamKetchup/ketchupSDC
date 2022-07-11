import ProfileCard from "./ProfileCard";
import SubscribedCommunities from "./SubscribedCommunities";
import styled from 'styled-components';


const ProfilePage = (props) => {
    console.log(props.subscribedCommunities);
    return (
        <ProfilePageContainer>
            <ProfileCard avatar={props.userInfo.banner} username={props.userInfo.username} bio={props.userInfo.bio} />
            <SubscribedCommunities communities={props.subscribedCommunities} />
        </ProfilePageContainer>
    );
}

export default ProfilePage;

const ProfilePageContainer = styled.div`

`
import ProfileCard from "./ProfileCard";
import SubscribedCommunities from "./SubscribedCommunities";
import styled from 'styled-components';
import { useState, useEffect } from "react";
import UserPosts from "../Posts_Comments/UserPosts";


const ProfilePage = ({ user, setUser, subscribedCommunities }) => {
    const user_id = user[0].id;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchUserPosts();
    }, [user_id])

    const fetchUserPosts = async () => {
        try {
            // const response = await fetch(`http://localhost:3025/user/posts/${user_id}`);
            const response = await fetch(`https://ketchup-db.herokuapp.com/user/posts/${user_id}`);
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                )
            }
            let actualData = await response.json();
            setPosts(actualData);
        } catch (error) {
            console.log(error);
        }
    }

    

    return (
        <ProfilePageContainer>

            <UserContentContainer>
                {posts && <UserPosts posts={posts} />}
            </UserContentContainer>
            <CardContainer>
                {/* {!profileInfo && <Loading>loading...</Loading>} */}
                <ProfileCard user={user} setUser={setUser} />
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

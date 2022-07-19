import Posts_Body from "./All_Posts/Posts_Body";
import styled from 'styled-components';

const UserPosts = (posts) => {
    return (
        <UserPostsContainer>
            <Posts_Body searchPosts={posts.posts} />
        </UserPostsContainer>
    );
}

export default UserPosts;


const UserPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
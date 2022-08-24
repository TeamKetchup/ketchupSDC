import Posts_Body from './All_Posts/Posts_Body';
import styled from 'styled-components';

const CommunityPosts = (posts) => {
    // console.log(posts.posts)
    return (
        <CommunityPostsContainer>
            <Posts_Body searchPosts={posts.posts} />
        </CommunityPostsContainer>
    );
}

export default CommunityPosts;

const CommunityPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
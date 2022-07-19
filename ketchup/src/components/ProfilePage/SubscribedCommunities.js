import styled from 'styled-components';
import { Link } from "react-router-dom";

const SubscribedCommunities = (props) => {


    return (
        <SubscribedCommunitiesContainer>
            <SubscribedCommunitiesBanner>
                <h4>Communities</h4>
            </SubscribedCommunitiesBanner>

            {props.communities.map((community) => (
                <StyledLink to={`/community/${community.name}`} key={community.id}>{community.name}</StyledLink>
            ))}
            <SubscribedCommunitiesFooter>
                <CreateCommunityLink to={`/createcommunity`}>Create Community</CreateCommunityLink>

            </SubscribedCommunitiesFooter>

        </SubscribedCommunitiesContainer>
    );
}

export default SubscribedCommunities;

const SubscribedCommunitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #393939;
    width: 300px;
    height: 300px;
    border-radius: 15px;
    padding: 20px;
    padding-top: 0;
    font-size: 18px;
    color: white;
    margin-top: 20px;
    font-family: 'oswald, san serif';
    font-weight: bold;
    font-size: 20px;
`
const SubscribedCommunitiesFooter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`

const StyledLink = styled(Link)`
    color: white;
    position: relative;
    margin-top: 15px;
    cursor: pointer;
    :hover {
        color: #FF0000;
        cursor: pointer;
    }
`

const CreateCommunityLink = styled(Link)`
    font-size: 25px;
    color: white;
    margin-top: 15px;
    cursor: pointer;
    :hover {
        color: #FF0000;
        cursor: pointer;
    }
`

const SubscribedCommunitiesBanner = styled.div`
    display: flex;
    justify-self: center;
    align-self: center;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    border-radius: 15px 15px 0px 0px;
    background: rgb(57,57,57);
    background: linear-gradient(0deg, rgba(57,57,57,1) 0%, rgba(209,44,44,1) 43%, rgba(255,0,0,1) 100%);
    h4{
        margin: 0;
        font-family: 'Pacifico', cursive;
        font-size: 45px;
    }
`


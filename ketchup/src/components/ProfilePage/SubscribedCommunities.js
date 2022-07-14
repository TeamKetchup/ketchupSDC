import styled from 'styled-components';
import { Link } from "react-router-dom";

const SubscribedCommunities = (props) => {

    // console.log(props.communities)
    return (
        <SubscribedCommunitiesContainer>
        <SubscribedCommunitiesBanner>
            <h4>Communities</h4>
        </SubscribedCommunitiesBanner>
            
            {props.communities.map((community) => (
                <StyledLink to={`/community/${community.name}`} key={community.id}>{community.name}</StyledLink>
            ))}
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
    /* min-width: 13%;
    min-height: 350px; */
    border-radius: 15px;
    padding: 20px;
    padding-top: 0;
    /* width: 50%; */
    /* height: 100%; */
    font-size: 18px;
    color: white;
    margin-top: 20px;
    font-family: 'oswald, san serif';
    font-weight: bold;
    font-size: 20px;
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

const SubscribedCommunitiesBanner = styled.div`
    display: flex;
    justify-self: center;
    align-self: center;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    border-radius: 15px 15px 0px 0px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(209,44,44,1) 55%, rgba(255,0,0,1) 100%);
    h4{
        margin: 0;
        font-family: 'Pacifico', cursive;
        font-size: 45px;
    }
`


import styled from 'styled-components';
import { Link } from "react-router-dom";

const SubscribedCommunities = (props) => {

    console.log(props.communities)
    return (
        <SubscribedCommunitiesContainer>
            <h4>Subscribed Communities</h4>
            {props.communities.map((community) => (
                <StyledLink to={`/${community.name}`} key={community.id}>{community.name}</StyledLink>
            ))}
        </SubscribedCommunitiesContainer>
    );
}

export default SubscribedCommunities;

const SubscribedCommunitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #393939;
    min-width: 13%;
    min-height: 350px;
    border-radius: 25px;
    padding: 20px;
    width: 50%;
    /* height: 100%; */
    font-size: 18px;
    color: white;
    margin: 80px;
    font-family: 'oswald, san serif'
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


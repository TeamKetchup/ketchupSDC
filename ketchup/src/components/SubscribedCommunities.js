import styled from 'styled-components';
import { Link } from "react-router-dom";

const SubscribedCommunities = (props) => {

    console.log(props.communities)
    return (
        <SubscribedCommunitiesContainer>
            <h4>Subscribed Communities</h4>
            <LinkToCommunity>{props.communities.name}</LinkToCommunity>
        </SubscribedCommunitiesContainer>
    );
}

export default SubscribedCommunities;

const SubscribedCommunitiesContainer = styled.div`
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

const LinkToCommunity = styled.a`
    font-size: 20px;
    color: white;
`

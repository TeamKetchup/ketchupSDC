import SubscribedCommunities from "./AllCommunities";
import styled from 'styled-components';
import { useParams } from "react-router";
import { useState, useEffect } from "react";





const CommunityPage = (communities) => {

    console.log(communities.communities);
    const { id } = useParams();
    const [singleCommunity, setSingleCommunity] = useState(null);

    useEffect(() => {
        fetchCommunityPage();
    }, [id]);

    const fetchCommunityPage = async () => {
        try {
            const response = await fetch(`http://localhost:3000/community/${id}`);
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                )
            }
            let actualData = await response.json();
            setSingleCommunity(actualData);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <CommunityHeader>
                {singleCommunity && <Banner src={singleCommunity[0].banner} />}
                <CommunityNav>{id}</CommunityNav>
            </CommunityHeader>
            <CommunityContainer>

                <PostContainer>

                </PostContainer>
                <CardContainer>
                    <SubscribedCommunities communities={communities.communities} />
                </CardContainer>
            </CommunityContainer>

        </>

    );
}

export default CommunityPage;

const CommunityHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: white;
    h1: {
        font-family: 'Roboto Condensed', sans-serif;
    }
`

const CommunityContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const PostContainer = styled.div`
    width: 70%;
    justify-content: center;
    align-items: center;
`

const CardContainer = styled.div`
    width: 30%;
    justify-content: center;
    align-items: center;
    color: white;
`

const Banner = styled.img`
    width: 100%;
    height: 250px;

`

const CommunityNav = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #393939;
    font-size: 45px;
`
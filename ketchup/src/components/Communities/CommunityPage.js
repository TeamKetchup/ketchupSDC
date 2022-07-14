import SubscribedCommunities from "../ProfilePage/SubscribedCommunities";
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
    width: 60%;
    max-height: 300px;
`
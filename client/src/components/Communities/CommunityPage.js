import SubscribedCommunities from "../ProfilePage/SubscribedCommunities";
import styled from 'styled-components';
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Posts_Body from "../Posts_Comments/All_Posts/Posts_Body";
import CommunityPosts from "../Posts_Comments/CommunityPosts";
import Posts from "../Posts_Comments/All_Posts/Posts";
// import Posts from "../Posts_Comments/Posts";
import { Link } from "react-router-dom";





const CommunityPage = (props) => {

    // console.log(communities);
    const { id } = useParams();
    const [singleCommunity, setSingleCommunity] = useState(null);
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetchCommunityPage();
        // fetchPosts();
    }, [id]);

    console.log(id)
    console.log(props.user[0].id)

    const fetchCommunityPage = async () => {
        try {
            // const response = await fetch(`http://localhost:3025/community/${id}`);
            const response = await fetch(`https://ketchup-db.herokuapp.com/community/${id}`);
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                )
            }
            let actualData = await response.json();
            setSingleCommunity(actualData);
            // console.log(actualData)
            fetchPosts(actualData[0].id);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchPosts = async (id) => {
        try {
            const response = await fetch(`https://ketchup-db.herokuapp.com/community/posts/${id}`);
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


    // console.log(singleCommunity)

    return (
        <>
            <CommunityHeader>
                {singleCommunity && <Banner src={singleCommunity[0].banner} />}
            </CommunityHeader>
            <CommunityNav>
                <h1>Welcome To The <span>{singleCommunity && singleCommunity[0].name}</span> Community</h1>
            </CommunityNav>
            <CommunityContainer>
                <PostContainer>
                    {singleCommunity && <StyledLink to={`/createpost/${props.user[0].id}/${singleCommunity[0].id}`}>Create Post</StyledLink>}
                    {posts && <CommunityPosts posts={posts} />}
                </PostContainer>
                <CardContainer>
                    <SubscribedCommunities communities={props.communities} />
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


const StyledLink = styled(Link)`
    font-size: 25px;
    color: white;
    position: relative;
    margin-top: 15px;
    cursor: pointer;
    :hover {
        color: #FF0000;
        cursor: pointer;
    }
`

const CommunityContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
`

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    max-height: 250px;
`

const CommunityNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #393939;
    text-align: center;
    color: white;
    h1{
        margin: 0;
        font-family: 'Oswald', sans-serif;
    }
    span{
        color: #FF0000;
        font-size: 40px;
    }
`
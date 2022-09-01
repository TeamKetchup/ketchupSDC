import styled from "styled-components";
import Modal from 'react-modal';
import BannerDropZone from '../LogInSignUp/BannerDropZone';
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

Modal.setAppElement('#root');

const CreateCommunity = (user) => {

    const [newCommunity, setNewCommunity] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newBanner, setNewBanner] = useState('');
    const [userID, setUserId] = useState(user.user[0].id);
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    // const createCommunity = (e) => {
    //     e.preventDefault();
    //     let postObj = {
    //         name: newCommunity,
    //         category: newCategory,
    //         banner: newBanner,
    //         users_id: userID
    //     }
    //     setIsLoading(true);
    //     console.log(postObj)
    //     fetch(`http://localhost:3025/api/postcommunity`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(postObj)
    //     }).then(() => {
    //         setIsLoading(false)
    //         console.log('Community Created')
    //     })
    // }

    const submitCommunity = async (file, newCommunity, category, users_id) => {
        const formData = new FormData();
        formData.append("name", newCommunity);
        formData.append("category", category);
        formData.append("file", file);
        formData.append("users_id", users_id);
        // await axios.post("http://localhost:3025/api/createcommunity", formData);
        await axios.post("https://ketchup-db.herokuapp.com/api/createcommunity", formData);
        console.log('Community created')
    }


    return (

        <CreateCommunityContainer>
            <FormContainer>
                <HeaderContainer>
                    <Header1>To Create A Community</Header1>
                    <Header2>Please Enter The Required Fields</Header2>
                </HeaderContainer>
                <CreateCommunityForm >
                    <Input
                        type='text'
                        required
                        value={newCommunity}
                        placeholder="Enter Community Name.."
                        onChange={(e) => setNewCommunity(e.target.value)}
                    />
                    <Input
                        type='text'
                        required
                        value={newCategory}
                        placeholder='Enter Community Category..'
                        onChange={(e) => setNewCategory(e.target.value)}
                    />
                    <Header3>Select an Image for Community Banner:</Header3>
                    <BannerDropZone images={images} setImages={setImages} />
                    {/* <Input
                        type='text'
                        required
                        value={newBanner}
                        placeholder='Enter Image URL for banner..'
                        onChange={(e) => setNewBanner(e.target.value)}
                    /> */}
                    <ButtonContainer>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            submitCommunity(images[0], newCommunity, newCategory, userID);
                        }}>Submit</Button>
                        <Link to='/'>
                            <Button>Cancel</Button>
                        </Link>
                    </ButtonContainer>
                </CreateCommunityForm>
            </FormContainer>
        </CreateCommunityContainer >

    );
}

export default CreateCommunity;

const CreateCommunityContainer = styled.div`
    display: flex;
    place-items: center;
    justify-content: center;
    flex-direction: column;
    
`

const FormContainer = styled.div`
    background-color: #393939;
    margin: 100px;
`

const CreateCommunityForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    margin: 10px 0px;
    height: 35px;
    width: 270px;
    font-size: 17px;
    border-radius: 5px;
    border: 0;
    :focus-within{
        box-shadow: 0 0px 4px 4px red;
        outline: 0;
    } 
`

const Header1 = styled.h2`
    color: #FF0000;
    font-family: 'Oswald', sans-serif;
    margin: 0;
`

const Header2 = styled.h2`
    color: gray;
    font-family: 'Oswald', sans-serif;
    margin: 0;
`
const Header3 = styled.h3`
    color: #FF0000;
    font-family: 'Oswald', sans-serif;
    margin-top: 5px;
    margin-bottom: -5px;
`

const ButtonContainer = styled.div`
    display: flex;
`

const Button = styled.button`
    display: flex;
    box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
    height: 40px;
    width: 180px;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: auto;
    font-family: 'Pacifico', cursive;
    font-size: 25px;
    border: transparent;
    background-color: white;
    border-radius: 999px;
    margin: 10px;
    :hover {
        background-color: #FF0000;
        transform: scale(1.1);
        color: white;
        border-radius: 999px;
        cursor: pointer;
        }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
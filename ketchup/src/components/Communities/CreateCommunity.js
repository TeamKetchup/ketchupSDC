import styled from "styled-components";
import Modal from 'react-modal';
import BannerDropZone from '../LogInSignUp/BannerDropZone';
import { useState } from "react";
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

const CreateCommunity = () => {

    const [newCommunity, setNewCommunity] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newBanner, setNewBanner] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const createCommunity = (e) => {
        e.preventDefault();
        let postObj = {
            name: newCommunity,
            category: newCategory,
            banner: newBanner,
            users_id: 1
        }
        setIsLoading(true);
        console.log(postObj)
        fetch(`http://localhost:3025/api/postcommunity`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postObj)
        }).then(() => {
            setIsLoading(false)
            console.log('Community Created')
        })
    }


    return (

        <CreateCommunityContainer>
            <FormContainer>


                <HeaderContainer>
                    <Header1>To Create A Community</Header1>
                    <Header2>Please Enter The Required Fields</Header2>
                </HeaderContainer>
                <CreateCommunityForm onSubmit={createCommunity}>
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
                    <Input
                        type='text'
                        required
                        value={newBanner}
                        placeholder='Enter Image URL for banner..'
                        onChange={(e) => setNewBanner(e.target.value)}
                    />
                    {/* <BannerDropZone /> */}

                    <ButtonContainer>
                        <Button type="submit">Submit</Button>
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
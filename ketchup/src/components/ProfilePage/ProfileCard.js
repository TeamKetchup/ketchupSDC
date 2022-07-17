import { React, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';


const ProfileCard = (user) => {


    const [modalIsOpen, setIsOpen] = useState(false);
    const [bio, setBio] = useState(user.user[0].bio);
    const [avatar, setAvatar] = useState(user.user[0].avatar);
    const [userName, setUserName] = useState(user.user[0].username);
    const [newBio, setNewBio] = useState('');

    const updateBio = (e) => {
        e.preventDefault()
        setBio(newBio)
        setIsOpen(false);
        let updateObj = { bio: newBio };

        fetch(`http://localhost:3025/api/bio/${user.user[0].id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateObj)
        }).then(() => {
            console.log('Bio updated');
        })
    }

    Modal.setAppElement('#root');

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,.8)',
            color: 'white',
            minWidth: '25%',
        },
        overlay: {
            backgroundColor: 'rgba(0,0,0,.8)',
        }
    };


    return (
        <ProfileCardContainer className="side-card" >
            <ProfileCardHeader>
                <ProfileAvatar src={avatar} ></ProfileAvatar>
                <ProfileName>{userName}</ProfileName>
            </ProfileCardHeader>
            <Bio>
                Bio: {bio}
            </Bio>
            <FormButton onClick={() => setIsOpen(true)}>Update Bio</FormButton>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <form onSubmit={updateBio} >
                    <label>Update Bio: </label>
                    <BioInput
                        type="text"
                        required
                        value={newBio}
                        onChange={(e) => setNewBio(e.target.value)}
                    />
                    <ButtonContainer>
                        <FormButton type="submit">Submit</FormButton>
                        <FormButton onClick={() => setIsOpen(false)}>Back</FormButton>
                    </ButtonContainer>
                </form>
            </Modal>
        </ProfileCardContainer >
    );
}

export default ProfileCard;

const ProfileCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #393939;
    align-items: center;
    min-width: 13%;
    min-height: 350px;
    border-radius: 25px;
    /* padding: 20px; */
    width: 300px;
    /* height: 100%; */
    font-size: 18px;
    color: white;
    margin: 80px;
    font-family: 'oswald, san serif';
`

const ProfileCardHeader = styled.div`
    display: flex;
    justify-self: center;
    align-self: center;
    justify-content: space-evenly;
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

const ProfileAvatar = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 999px;
`

const ProfileName = styled.h3`
    text-align: right;
    padding-right: 30px;
`

const Bio = styled.p`
    margin-top: 20px;
    text-align: center;
    max-width: 90%;
    padding-bottom: 150px;
    font-family: 'oswald, san serif';
`

const BioInput = styled.textarea`
    vertical-align: top;
    min-height: 100px;
    min-width: 100%;
    border: none;
`

const FormButton = styled.button`
    -webkit-font-smoothing: antialiased;
    align-self: center;
    color: black;
    padding: 8px;
    cursor: pointer;
    display: flex;
    box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
    justify-content: center;
    align-items: center;
    align-content: center;
    font-family: 'Pacifico', cursive;
    border: transparent;
    background-color: white;
    border-radius: 999px;
    margin: 10px;
    :hover {
        background-color: #FF0000;
        transform: scale(1.1);
        color: white;
        border-radius: 999px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`



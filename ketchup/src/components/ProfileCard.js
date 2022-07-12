import { React, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import UpdateBio from './UpdateBio';

const ProfileCard = (userInfo) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [bio, setBio] = useState(userInfo.userInfo.bio);
    const [avatar, setAvatar] = useState(userInfo.userInfo.banner);
    const [userName, setUserName] = useState(userInfo.userInfo.username);
    const [newBio, setNewBio] = useState('');

    const updateBio = async (e) => {
        console.log(newBio)
        setBio(newBio)
        let updateObj = { bio: newBio };
        console.log(newBio);
        fetch(`http://localhost:3000/api/bio/1`, {
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
                <form onSubmit={updateBio}>
                    <label>Update Bio: </label>
                    <input
                        type="text"
                        required
                        value={newBio}
                        onChange={(e) => setNewBio(e.target.value)}
                    />
                    <input type="submit" />
                </form>
                <FormButton onClick={() => setIsOpen(false)}>Back</FormButton>
            </Modal>
        </ProfileCardContainer >
    );
}

export default ProfileCard;

const ProfileCardContainer = styled.div`
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
    margin-bottom: 50px;
`

const ProfileCardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
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
    text-align: center;
    max-width: 90%;
    padding-bottom: 70px;
`

const FormButton = styled.button`
    max-width: 30%;
    align-self: center;
    color: black;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
`

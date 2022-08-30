import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components';
import Logo from './images/image-removebg-preview.png'
import '../../index.css'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import AuthContext from '../../context/AuthProvider';
import axios from 'axios';

Modal.setAppElement('#root');


function LogInPage({ user, setUser, setLoading }) {
  useEffect(() => {
    const currentUser = localStorage.getItem("ketchupsdccurrentUser");
    if (currentUser !== null) {
      setUser(JSON.parse(currentUser));
    }
  },[]);

  const [usernameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;

  const logIn = async (e) => {
    e.preventDefault();
    const data = {
      username: usernameInput,
      password: passwordInput,
    };
    // .then((res) => localStorage.setItem("currentUser",JSON.stringify([res.data])))
    // .then((res) => setUser([res.data]))
    try {
     let returnedData = await axios.post(
      // "http://localhost:3025/api/login/",
      "https://ketchup-db.herokuapp.com/api/login/",
      data
    );
      if (!returnedData.data.username) {
        alert("Invalid login. Please check your username or password.");
      } else {
        localStorage.setItem(
          "ketchupsdccurrentUser",
          JSON.stringify([returnedData.data])
        );
        setUser([returnedData.data]);
        setLoading(false);
      }
    } catch (error) {
      if (error) {
        alert("User does not exist. Please create an account.");
        console.error(error);
        return undefined;
      }
    }

    // .then((res) => localStorage.setItem('user', JSON.stringify([res.data])))

    // .then((data) => console.log(data))
    // .map((userData) => (
    // {
    //      id: userData.id,
    //      avatar: userData.avatar,
    //      banner: userData.banner,
    //      bio: userData.bio,
    //      username: userData.username
    // }
  };

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}

     return (
          <div className='loginPage'>
               <HeaderLogoContainer>
                    <KetchupLogo src={Logo}>
                    </KetchupLogo>
                    <HeaderContainer>
                         <LoginHeader><Link to="/">KETCHUP</Link></LoginHeader>
                         <span className='loginSlogan'>With The World, With Your Friends.</span>
                    </HeaderContainer>
               </HeaderLogoContainer>
               <LogInBtnContainer>
                    <LogInPageBtn onClick={openModal}>Log In</LogInPageBtn>
                    <Modal
                         isOpen={modalIsOpen}
                         onAfterOpen={afterOpenModal}
                         onRequestClose={closeModal}
                         style={customStyles}
                         contentLabel="Example Modal"
                    >
                         <InnerModalContainer>
                              <ModalHeader ref={(_subtitle) => (subtitle = _subtitle)}>Log In</ModalHeader>
                              <ModalForm onSubmit={logIn}>
                                   {/* <InputContainer> */}
                                        <Input 
                                             type='text' 
                                             placeholder='Enter User Name'
                                             value={usernameInput}
                                             onChange={(e) => setUserNameInput(e.target.value)}
                                             required 
                                        />
                                        <Input 
                                             type='password' 
                                             placeholder='Enter Password' 
                                             value={passwordInput}
                                             onChange={(e) => setPasswordInput(e.target.value)}
                                             required
                                        />
                                        <ModalSubmitBtn type='submit'></ModalSubmitBtn>
                                   {/* </InputContainer> */}
                              </ModalForm>
                              {/* <ModalBtn>Submit</ModalBtn> */}
                              <ModalBtn onClick={closeModal}>Cancel</ModalBtn>
                         </InnerModalContainer>

                    </Modal>
                    <Link to='/register'>
                         <LogInPageBtn>Sign Up</LogInPageBtn>
                    </Link>
               </LogInBtnContainer>
          </div>
               
     )
}

export default LogInPage;

const customStyles = {
     overlay: {
          backgroundColor: 'rgba(0,0,0,.4)',
     },
     content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#F1F2F5',
     },
};

const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Oswald", sans-serif;
  font-size: 45px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: gray;
    font-size: 27px;
  }
`;
const LoginHeader = styled.h1`
  display: flex;

  justify-content: center;
  align-content: center;
  color: #ff0000;
  margin: 0px;
  a {
    color: #ff0000;
  }
  :hover {
    text-decoration: underline;
    cursor: pointer;
    color: red;
  }
`;

const KetchupLogo = styled.img`
  border-radius: 50%;
  height: 270px;
  width: 270px;
  margin-right: 5px;
  animation: floating 3s ease-in-out infinite;
  .floating {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    /* margin-left: 30px;
          margin-top: 5px; */
  }
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 25px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;

const LogInBtnContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const LogInPageBtn = styled.button`
  display: flex;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  height: 50px;
  width: 200px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
  font-family: "Pacifico", cursive;
  font-size: 25px;
  border: transparent;
  background-color: white;
  border-radius: 999px;
  margin: 10px;
  /* animation: floating 3s ease-in-out infinite; */
  :hover {
    background-color: #ff0000;
    transform: scale(1.1);
    color: white;
    border-radius: 999px;
    cursor: pointer;
  }
`;

const InnerModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 350px;
`;
const ModalForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
     margin: 10px 0px;
     height: 40px;
     width: 270px;
     font-size: 17px;
     border-radius: 5px;
     border: 0;
     font-family: 'Oswald', sans-serif;
     font-size: 21px;
     :focus-within{
          box-shadow: 0 0px 4px 4px red;
          outline: 0;
     }
`

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalBtn = styled.button`
  display: flex;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  height: 40px;
  width: 180px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
  font-family: "Pacifico", cursive;
  font-size: 25px;
  border: transparent;
  background-color: white;
  border-radius: 999px;
  margin: 10px;
  /* animation: floating 3s ease-in-out infinite; */
  :hover {
    background-color: #ff0000;
    transform: scale(1.1);
    color: white;
    border-radius: 999px;
    cursor: pointer;
  }
`;

const ModalHeader = styled.h1`
  font-family: "Oswald", sans-serif;
  padding-bottom: 5px;
`;

const ModalSubmitBtn = styled.input`
  display: flex;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  height: 40px;
  width: 180px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
  font-family: "Pacifico", cursive;
  font-size: 25px;
  border: transparent;
  background-color: white;
  border-radius: 999px;
  margin: 10px;
  /* animation: floating 3s ease-in-out infinite; */
  :hover {
    background-color: #ff0000;
    transform: scale(1.1);
    color: white;
    border-radius: 999px;
    cursor: pointer;
  }
`;

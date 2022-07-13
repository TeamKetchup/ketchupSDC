import React from 'react'
import styled from 'styled-components';
import Logo from './image-removebg-preview.png'
import '../../index.css'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

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

Modal.setAppElement('#root');

function LogInPage() {
     let subtitle;
     const [modalIsOpen, setIsOpen] = React.useState(false);

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
                              <ModalForm>
                                   <InputContainer>
                                        <Input type='text' placeholder='Enter User Name' />
                                        <Input type='password' placeholder='Enter Password' />
                                   </InputContainer>
                              </ModalForm>
                              <ModalBtn>Submit</ModalBtn>
                              <ModalBtn onClick={closeModal}>Cancel</ModalBtn>
                         </InnerModalContainer>

                    </Modal>
                    <Link to='/signuppage'>
                         <LogInPageBtn>Sign Up</LogInPageBtn>
                    </Link>
               </LogInBtnContainer>

          </div>
     )
}

export default LogInPage;

const HeaderLogoContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     font-family: 'Oswald', sans-serif;
     font-size: 45px;
`
const HeaderContainer = styled.div`
     display: flex;
     flex-direction: column;
     span{
          color: gray;
          font-size: 27px;
     }
`
const LoginHeader = styled.h1`
     display: flex;

     justify-content: center;
     align-content: center;
     color: #FF0000;
     margin: 0px;
     a{
          color: #FF0000;
     }
     :hover{
          text-decoration: underline;
          cursor: pointer;
          color: red;
     }
`

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
          0%   { transform: translate(0,  0px); };
          50%  { transform: translate(0, 25px); };
          100% { transform: translate(0, -0px); }; 
     }
`

const LogInBtnContainer = styled.div`
     display: flex;
     margin-top: 10px;
`

const LogInPageBtn = styled.button`
  display: flex;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  height: 50px;
  width: 200px;
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
  /* animation: floating 3s ease-in-out infinite; */
  :hover {
     background-color: #FF0000;
     transform: scale(1.1);
     color: white;
     border-radius: 999px;
     cursor: pointer;
     }

`

const InnerModalContainer = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     height: 300px;
     width: 350px;
`
const ModalForm = styled.form`

`

const Input = styled.input`
     margin: 10px 0px;
     height: 35px;
     width: 270px;
     font-size: 17px;
     border-radius: 5px;
`

const InputContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
`

const ModalBtn = styled.button`
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
  /* animation: floating 3s ease-in-out infinite; */
  :hover {
     background-color: #FF0000;
     transform: scale(1.1);
     color: white;
      border-radius: 999px;
     cursor: pointer;
     }

`

const ModalHeader = styled.h1`
     font-family: 'Oswald', sans-serif;
     padding-bottom: 15px;
`
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BannerDropZone from './BannerDropZone';
import HeaderDropZone from './HeaderDropZone';
import Logo from './image-removebg-preview.png';


function SignUpPage() {
     return (
          <div className='signUpPage'>
               <SignUpContainer>
                    <KetchupLogo src={Logo}></KetchupLogo>
                    <Header1>To Create An Account</Header1>
                    <Header2>Please Enter The Required Fields</Header2>
                    <CreateAccountForm>
                         <Input
                              type='text'
                              placeholder='Pick a User Name, No Spaces'
                         />
                         <Input
                              type='password'
                              placeholder='Password'
                         />
                         <Input
                              type='password'
                              placeholder='Verify Password'
                         />
                         <Header3>Select an Image for Your Avatar:</Header3>
                         <HeaderDropZone />
                         <Header3>Select an Image for Your Profile Banner:</Header3>
                         <BannerDropZone />
                         <ButtonContainer>
                              <Button>Submit</Button>
                              <Link to='/loginpage'>
                                   <Button>Cancel</Button>
                              </Link>
                         </ButtonContainer>

                    </CreateAccountForm>
               </SignUpContainer>

          </div>
     )
}

export default SignUpPage;

const SignUpContainer = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border-radius: 8px;
     background-color: #393939;
     height: auto;
     width: 500px;
     padding-bottom: 15px;
`
const KetchupLogo = styled.img`
     border-radius: 50%;
     height: 125px;
     width: 125px;
     margin-bottom: 10px;
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
          50%  { transform: translate(0, 20px); };
          100% { transform: translate(0, -0px); }; 
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

const CreateAccountForm = styled.form`
     display: flex;
     flex-direction: column;
     margin-top: 10px;
     justify-content: center;
     align-items: center;
`

const Input = styled.input`
     height: 40px;
     width: 350px;
     margin: 5px;
     font-size: 20px;
     font-family: 'Oswald', sans-serif;
     border: none;
     border-radius: 5px;
`

const Header3 = styled.h3`
     color: #FF0000;
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
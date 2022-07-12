import React from 'react'
import styled from 'styled-components';
import Logo from './image-removebg-preview.png'
import '../../index.css'
import { Link } from 'react-router-dom';


function LogInPage() {
  return (
    <div className='loginPage'>
          <HeaderLogoContainer>
               <KetchupLogo src={Logo}>          
               </KetchupLogo>
               <HeaderContainer>
                    <LoginHeader>KETCHUP</LoginHeader>
                    <span className='loginSlogan'>With The World, With Your Friends.</span>
               </HeaderContainer>
          </HeaderLogoContainer>
          <LogInBtnContainer>
               <LogInPageBtn >Log In</LogInPageBtn>
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
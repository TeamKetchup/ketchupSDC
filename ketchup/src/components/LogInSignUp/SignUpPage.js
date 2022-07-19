import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderDropZone from "./HeaderDropZone";
import Logo from "./images/image-removebg-preview.png";
import axios from "axios";
import { useState } from "react";

function SignUpPage({ user }) {
  const [newBio, setNewBio] = useState('');
  const [images, setImages] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");

  const handleUserName = (value) => {
    setUserName(value);
    console.log(userName);
  };

  const handlePassword = (value) => {
    setPassword(value);
    console.log(password);
  }

  const handleValidatePassword = (value) => {
    setValidatePassword(value);
    console.log(validatePassword);
  }

  const submitProfile = async (file, username, password, newBio) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("file", file);
    formData.append("bio", newBio);
    await axios.post("http://localhost:3025/api/createprofile", formData);
    console.log('user created')
  };
  console.log(user);
  return (
    <div className="signUpPage">
      <SignUpContainer>
        <KetchupLogo src={Logo}></KetchupLogo>
        <Header1>To Create An Account</Header1>
        <Header2>Please Enter The Required Fields</Header2>
        <CreateAccountForm>
          <Input
            onChange={(e) => {
              handleUserName(e.target.value);
            }}
            id="username-create"
            type="text"
            placeholder="Pick a User Name, No Spaces"
          />
          <Input
            onChange={(e) => { handlePassword(e.target.value) }}
            id="password-create" type="password"
            placeholder="Password" />
          <Input
            onChange={(e) => { handleValidatePassword(e.target.value) }}
            id="password-validate"
            type="password"
            placeholder="Verify Password"
          />
          <Header3>Select an Image for Your Avatar:</Header3>
          <HeaderDropZone images={images} setImages={setImages} />
          <Header4>Enter a bio for your profile:</Header4>
          <BioInput
            type="text"
            required
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
          />
          <ButtonContainer>
            <Button
              onClick={(e) => {
                e.preventDefault();
                if (password === validatePassword) {
                    submitProfile(images[0], userName, password, newBio);
              }}}
            >
              Submit
            </Button>
            <Link to="/">
              <Button>Cancel</Button>
            </Link>
          </ButtonContainer>
        </CreateAccountForm>
      </SignUpContainer>
    </div>
  );
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
  width: 475px;
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
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 20px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`

const Header1 = styled.h2`
  color: #ff0000;
  font-family: "Oswald", sans-serif;
  margin: 0;
`;

const Header2 = styled.h2`
  color: gray;
  font-family: "Oswald", sans-serif;
  margin: 0;
`;

const CreateAccountForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
     height: 40px;
     width: 350px;
     margin: 5px;
     font-size: 20px;
     font-family: 'Oswald', sans-serif;
     border: none;
     border-radius: 5px;
     :focus-within{
          box-shadow: 0 0px 4px 4px red;
          outline: 0;
     }
`

const Header3 = styled.h3`
     color: #FF0000;
     font-family: 'Oswald', sans-serif;
     margin-top: 5px;
     margin-bottom: -5px;
`

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
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
  :hover {
      background-color: #FF0000;
      transform: scale(1.1);
      color: white;
      border-radius: 999px;
      cursor: pointer;
     }
`
const BioInput = styled.textarea`
    vertical-align: top;
    height: 100px;
    width: 350px;
    border-radius: 5px;
    border: none;
    margin-bottom: 15px;
    :focus-within{
          box-shadow: 0 0px 4px 4px red;
          outline: 0;
     }
`

const Header4 = styled.h3`
     margin: 0;
     margin-bottom: 5px;
     color: #FF0000;
     font-family: 'Oswald', sans-serif;

`

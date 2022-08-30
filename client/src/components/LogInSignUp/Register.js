import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import Logo from "./images/image-removebg-preview.png";
import DancingTomato from "./images/dancingtomato.gif"
import Check from "./images/checkmark.png";
import Xmark from "./images/xmark.png";
import Info from "./images/info.svg.png"
import { Link } from 'react-router-dom';
import HeaderDropZone from "./HeaderDropZone";
import axios from "axios";

// username must start with lower/uppercase letter, must be followed with
//anyhere from 3-23 characters that must either be lower/uppercase letters, hyphens or underscores
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// password requires at least one lowercase letter, one uppercase letter, one digit
// and one special character and it can be anywhere from 8-24 characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = ({ user, setUser }) => {
     // set the focus on user input when component loads
     const userRef = useRef();
     // announces error in validation to user  
     const errRef = useRef();

     //state for bio entry and image dropzone
     const [newBio, setNewBio] = useState('');
     const [images, setImages] = useState([]);

     //state for the user input
     const [userName, setUserName] = useState('');
     const [validName, setValidName] = useState('');
     const [userFocus, setUserFocus] = useState('');

     //state for the password input
     const [pwd, setPwd] = useState('');
     const [validPwd, setValidPwd] = useState(false);
     const [pwdFocus, setPwdFocus] = useState(false);
 
     //state for password verification
     const [matchPwd, setMatchPwd] = useState('');
     const [validMatch, setValidMatch] = useState(false);
     const [matchFocus, setMatchFocus] = useState(false);
 
     //state for error and success messages
     const [errMsg, setErrMsg] = useState('');
     const [success, setSuccess] = useState(false);

     //focus on username input when component loads and only once
     useEffect(() => {
          userRef.current.focus();
      }, [])
  
      //username validation  and will change everytime the username changes in the input field
      useEffect(() => {
          setValidName(USER_REGEX.test(userName));
      }, [userName])
  
      //checking to see if password field and the validate password field match
      useEffect(() => {
          setValidPwd(PWD_REGEX.test(pwd));
          setValidMatch(pwd === matchPwd);
      }, [pwd, matchPwd])
  
      //error message 
      //anytime user changes the state of username, password or match password
      //it will clear the error message from displaying
      useEffect(() => {
          setErrMsg('');
      }, [userName, pwd, matchPwd])

      const submitProfile = async (file, username, password, newBio) => {
          
          try{
               // const response = await axios.get(`http://localhost:3025/api/login/${userName}`)
               const response = await axios.get(`https://ketchup-db.herokuapp.com/api/login/${userName}`)
               // .then((res) => 
               if(response.data.length === 0){
                    // setErrMsg('User name is not taken')
                    const formData = new FormData();
                    formData.append("username", username);
                    formData.append("password", password);
                    formData.append("file", file);
                    formData.append("bio", newBio);
                    try{
                    //    const response = await axios.post("http://localhost:3025/api/createprofile", formData, {
                       const response = await axios.post("https://ketchup-db.herokuapp.com/api/createprofile", formData, {
                         headers: { 'Content-Type': 'application/json' },
                         withCredentials: true
                       }
                       );
                       setSuccess(true);
                       console.log('user created')
                    } catch (err){
                         if(!err?.response){
                              setErrMsg('No Server Response');
                         } else if (err.response?.status === 409) {
                              setErrMsg('Oof, that user name is taken.');
                         } else {
                              setErrMsg('Registration failed please try again.')
                         }
                         errRef.current.focus();
                    }
               } else {
                    setErrMsg('Oof, that user name is already taken.')
               }
          }catch (err){
               console.log(err)
          }

     };



  return (
  <>
     {success ? (
          <div className='register'>
               <SuccessHeader>Woo Hoo! Your account has been created!</SuccessHeader>
               <SuccessLogo src={DancingTomato}></SuccessLogo>
               <Link to='/'><Button>Return To Log In Page</Button></Link>
          </div>
     ) : ( 
     
     <div className='register'>
      <RegisterSection>
          <P ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> 
               {errMsg} 
          </P>
          <KetchupLogo src={Logo}></KetchupLogo>
          <RegisterTitle>Register</RegisterTitle>
          <RegisterForm>
               {/* user name field */}
               <Div>
               <Label htmlFor='username'>
                    {/* Username: */}
                    <Span className={validName ? "valid" : "hide"}>
                         <CheckMark src={Check}></CheckMark>
                    </Span>
                    <Span className={validName || !userName ? "hide" : "invalid"}>
                         <XMark src={Xmark}></XMark>
                    </Span>
               </Label>
               <Input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    placeholder="Enter Desired User Name"
               />
               </Div>
               <Div>
               <P id="uidnote" className={userFocus && userName && !validName ? "instructions" : "hide"}>
                    <InfoIcon src={Info}></InfoIcon> <br />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
               </P>
               </Div>

               {/* password field */}
               <Div>
               <Label htmlFor='password'>
                    {/* Password: */}
                    <Span className={validPwd ? "valid" : "hide"}>
                         <CheckMark src={Check}></CheckMark>
                    </Span>
                    <Span className={validPwd || !pwd ? "hide" : "invalid"}>
                         <XMark src={Xmark}></XMark>
                    </Span>
               </Label>
               <Input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    placeholder="Enter Desired Password"
               />
               </Div>
               <Div>
               <P id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "hide"}>
                    <InfoIcon src={Info}></InfoIcon> <br />
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span> 
                    <span aria-label="at symbol">@</span> 
                    <span aria-label="hashtag">#</span> 
                    <span aria-label="dollar sign">$</span> 
                    <span aria-label="percent">%</span>
               </P>
               </Div>

               {/* confirm  password field */}
               <Div>
               <Label htmlFor='confirm_pwd'>
                    {/*Confirm Password: */}
                    <Span className={validMatch && matchPwd ? "valid" : "hide"}>
                         <CheckMark src={Check}></CheckMark>
                    </Span>
                    <Span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                         <XMark src={Xmark}></XMark>
                    </Span>
               </Label>
               <Input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    placeholder="Confirm Password"
               />
               </Div>
               <Div>
               <P id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "hide"}>
                    <InfoIcon src={Info}></InfoIcon> <br />
                    Must match desired password above.
               </P>
               </Div>
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
                    <Button disabled={!validName || !validPwd || !validMatch || !newBio || !images ? true : false}
                         onClick={(e) => {
                              e.preventDefault();
                              // if button enabled with JS hack
                              // const v1 = USER_REGEX.test(user);
                              // const v2 = PWD_REGEX.test(pwd);
                              // if (!v1 || !v2) {
                              //      setErrMsg("Invalid Entry");
                              //      return;
                              // }
                              submitProfile(images[0], userName, pwd, newBio);
                              // setSuccess(true)
                         }}
                    >
                         Submit
                    </Button>
                    <Link to="/">
                    <Button>Cancel</Button>
                     </Link>
               </ButtonContainer>
          </RegisterForm>
      </RegisterSection>
    </div>
     )}
 </>
     
  )
}



export default Register;


const RegisterSection = styled.section`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border-radius: 8px;
     background-color: #393939;
     height: auto;
     width: 475px;
     padding-bottom: 15px;
     color: white;
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

const P = styled.p`
     font-family: 'Oswald', sans-serif;
     font-size: 15px;
     width: 350px;
     margin-left: 15px;
     margin-bottom: 10px;
     margin-top: -5px;
`

const RegisterTitle = styled.h1`
     margin-bottom: 10px;
`

const RegisterForm = styled.form`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`
const Label = styled.label`

`

const Input = styled.input`
     height: 40px;
     width: 350px;
     margin: 5px;
     margin-bottom: 7px;
     font-size: 20px;
     font-family: 'Oswald', sans-serif;
     border: none;
     border-radius: 5px;
     :focus-within{
          box-shadow: 0 0px 4px 4px red;
          outline: 0;
     }
`

const Image = styled.img`

`

const Span = styled.span`
`
const CheckMark = styled.img`
     height: 30px;
     margin-right: -5px;
`

const XMark = styled.img`
     height: 20px;
     margin-right: 3px;
`
const InfoIcon = styled.img`
     height: 20px;
`

const Div = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  display: flex;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  height: 40px;
  width: 350px;
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
      /* transform: scale(1.1); */
      color: white;
      border-radius: 999px;
      cursor: pointer;
     }
`
const Header3 = styled.h3`
     color: #FF0000;
     font-family: 'Oswald', sans-serif;
     margin-top: 5px;
     margin-bottom: -5px;
`
const Header4 = styled.h3`
     margin: 0;
     margin-bottom: 5px;
     color: #FF0000;
     font-family: 'Oswald', sans-serif;

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

const SuccessHeader = styled.h1`
     color: white;
     text-shadow: 
     #FFF 0px 0px 5px, 
     #FF0000 0px 0px 10px, 
     #FF0000 0px 0px 15px, 
     #FF0000 0px 0px 20px, 
     #FF0000 0px 0px 30px, 
     #FF0000 0px 0px 40px, 
     #FF0000 0px 0px 50px, 
     #FF0000 0px 0px 75px; 
`

const SuccessLogo = styled.img`
  border-radius: 50%;
  height: 225px;
  width: 225px;
  margin-bottom: 20px;
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
import React, { useState } from 'react'
import styled from 'styled-components'
// import Header from '../header'
import HeaderDropZone from '../LogInSignUp/HeaderDropZone'



function CreatePost() {
  const [images, setImages] = useState([])
  return (
    <FormContainer>
    <FormDiv>Create a Post 
   

    <Postform id="new-post-form" >

    
                <PostTitle>
                    Post Title:
                    <PostTitleText 
                    name='new-post-header'
                    type='text' 
                    />
                </PostTitle>
                <div><SpaceDiv className="space"></SpaceDiv></div>
                <PostContent>
                    Post Content:
                    <PostContentTextArea 
                    name='new-post-body'
                    />
                </PostContent>

<HeaderDropZone images={images} setImages={setImages}/>Add Media


          </Postform>
    </FormDiv>
    </FormContainer>
  )
}

export default CreatePost

const FormContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const FormDiv = styled.div`
display: flex;
flex-direction: column;
background-color: #393939;
color: white;
margin-top: 20px;
margin-right: 40px;
width: 750px;
height: auto;
text-align:center;
border-radius: 25px;
font-weight: 500;
font-family: 'Oswald', sans-serif;
font-size: 30px;
justify-content: center;
align-items: center;
`

const Postform = styled.form`
display: flex;
flex-direction: column;
background-color: #393939;
color: white;
margin-top: 20px;
margin-right: 40px;
width: 750px;
height: 700px;
text-align:center;
align-items: center;

border-radius: 25px; 


`

const SpaceDiv = styled.div`
padding: 10px;
`
const PostTitle = styled.label`
width: 500px;
font-size: 20px;

`


const PostContent = styled.label`
width: 500px;
font-size: 20px;

`
const PostContentTextArea = styled.textarea`
width: 500px;
height: 300px;
border-radius: 25px;

`

const PostTitleText = styled.input`
width: 500px;
height: 30px;
border-radius: 25px;
`
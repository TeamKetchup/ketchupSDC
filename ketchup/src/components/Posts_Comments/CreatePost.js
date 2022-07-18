import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../header'
import HeaderDropZone from '../LogInSignUp/HeaderDropZone'



function CreatePost() {
  const [images, setImages] = useState([])
  return (
    
    <FormDiv>Create a Post 
   

    <Postform id="new-post-form" >

    
                <label>
                    Post Title:
                    <input 
                    name='new-post-header'
                    type='text' 
                    />
                </label>
                <div><SpaceDiv className="space"></SpaceDiv></div>
                <PostContent>
                    Post Content:
                    <PostTextArea 
                    name='new-post-body'
                    />
                </PostContent>

<HeaderDropZone images={images} setImages={setImages}/>


          </Postform>
    </FormDiv>
  )
}

export default CreatePost

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
`

const Postform = styled.form`
display: flex;
flex-direction: column;
background-color: #393939;
color: white;
margin-top: 20px;
margin-right: 40px;
width: 750px;
height: 600px;
text-align:center;
align-items: center;
/* justify-content: center; */
border-radius: 25px; 

`

const SpaceDiv = styled.div`
padding: 10px;
`

const PostContent = styled.label`
width: 750px
`
const PostTextArea = styled.textarea`
width: 500px;
height: 300px;
border-radius: 25px;

`
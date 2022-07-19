import React, { useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import HeaderDropZone from '../LogInSignUp/HeaderDropZone'



function CreatePost() {
  const [images, setImages] = useState([])
  const [title, setTitle] = useState("")
  const [pbody, setPBody] = useState("")
  
  const submitPost = async (file, title, pbody) => {
    const formData = new FormData();
    formData.append("posttitle", title);
    formData.append("postcontent", pbody);
    formData.append("file", file);
    await axios.post("http://localhost:3025/api/createpost", formData);
    console.log('post created')
  };
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

                Add Media<HeaderDropZone images={images} setImages={setImages}/>

                <PostSubmit>
                    
                    <PostSubmitText onClick={(e) => {
                e.preventDefault();
                submitPost(images[0], title, pbody)
              }} 
                    name='new-post-submit'
                    type='submit' 
                    />
                </PostSubmit>
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
font-size: 20px;
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
height: 750px;
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
border-radius: 10px;

`

const PostTitleText = styled.input`
width: 500px;
height: 30px;
border-radius: 10px;
`

const PostSubmit = styled.div`


`

const PostSubmitText = styled.input`
width: 150px;
font-size: 30px;
border-radius: 10px;
background-color: gray;
`
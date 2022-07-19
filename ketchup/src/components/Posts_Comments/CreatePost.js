import React, { useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import HeaderDropZone from '../LogInSignUp/HeaderDropZone'



function CreatePost({user}) {
  const [images, setImages] = useState([])
  const [post_header, setTitle] = useState("")
  const [post_body, setPBody] = useState("")
  const date = new Date()
  const user_id = 1
  const com_id = 1
  
  const submitPost = async (file, post_header, post_body, date, com_id, user_id) => {
    const formData = new FormData();
    formData.append("post_header", post_header);
    formData.append("post_body", post_body);
    formData.append("file", file);
    formData.append("date", date);
    formData.append("user_id", user_id);
    formData.append("com_id", com_id);
    await axios.post("http://localhost:3025/api/createpost", formData);
    console.log('post created')
  };

 

  console.log(images)
  return (
    <FormContainer>
    <FormDiv>Create a Post 
   

    <Postform id="new-post-form" >

                    <PostTitle>
                    Post Title:
                    <PostTitleText 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={post_header}
                    name='new-post-header'
                    type='text' 
                    />
                </PostTitle>
                <div><SpaceDiv className="space"></SpaceDiv></div>
                <PostContent>
                    Post Content:
                    <PostContentTextArea
                    onChange={(e) => setPBody(e.target.value)} 
                    value={post_body}
                    name='new-post-body'
                    />
                </PostContent>

                Add Media<HeaderDropZone images={images} setImages={setImages}/>

                <PostSubmit>
                
                    <PostSubmitText onClick={(e) => {
                e.preventDefault();
                submitPost(images[0], post_header, post_body, date, com_id, user_id)
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
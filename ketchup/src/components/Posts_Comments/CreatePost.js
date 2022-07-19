import React from 'react'
import styled from 'styled-components'
import Header from '../Header/header'

function CreatePost() {
  return (
    <FormDiv>CreatePost
      {/* <Header /> */}

      <Postform id="new-post-form" >
        <input
          type="text"
          name="new-post-input"
          id="new-post-input"
          placeholder="What do you have planned?" />

        <input
          type="text"
          name="new-post-input"
          id="new-post-input"
          placeholder="What do you have planned?" />

        <input
          type="text"
          name="new-post-input"
          id="new-post-input"
          placeholder="What do you have planned?" />

        <input
          type="text"
          name="new-post-input"
          id="new-post-input"
          placeholder="What do you have planned?" />

        <input
          type="text"
          name="new-post-input"
          id="new-post-input"
          placeholder="What do you have planned?" />

        <input
          type="text"
          name="new-post-input"
          id="new-post-input"
          placeholder="What do you have planned?" />

        <input
          type="text"
          name="new-post-input"
          id="new-post-input"
          placeholder="What do you have planned?" />

        <input
          type="text"
          name="new-post-input"
          id="new-post-input"
          placeholder="What do you have planned?" />

        <input
          type="text"
          name="new-post-input"
          id="new-post-input"
          placeholder="What do you have planned?" />


        <input
          type="submit"
          id="new-post-submit"
          value="Add post" />
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
width: 450px;
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
width: 450px;
height: auto;
text-align:center;
border-radius: 25px; 

`
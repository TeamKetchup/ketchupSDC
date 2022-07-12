import { React, useState } from 'react';
import styled from 'styled-components';

const UpdateBio = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        //Save new bio here
    }

    return (
        <BioForm>
            <form onSubmit={handleSubmit}>
                <label>Update your bio:</label>
                <input type="text" />
            </form>
        </BioForm>
    );
}

export default UpdateBio;

const BioForm = styled.div`
    display: flex;
    flex-direction: column;
`
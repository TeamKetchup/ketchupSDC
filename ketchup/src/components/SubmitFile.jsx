import React, { useState } from 'react';

function SubmitFile({ fetchSubmit }) {
    const [file, setFile] = useState('');
    const handleClick = () => {
        fetchSubmit(file);
    }

    const handleFile = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0])
    }

  return (
    <>
    <input onChange={handleFile} type="file"></input>
    <input type="submit" onClick={handleClick}></input>
    </>
  )
}

export default SubmitFile
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 5
};

const thumb = {
  display: 'inline-flex',
  justifyContent: 'center',
  borderRadius: 2,
  marginBottom: 8,
  width: '100%',
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: '300px',
  height: '100%',
};


function BannerDropZone({ images, setImages }) {

  // const [images, setImages] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: acceptedFiles => {
      setImages(acceptedFiles.map(image => Object.assign(image, {
        preview: URL.createObjectURL(image)
      })));
    }
  });

  const thumbs = images.map(image => (
    <div
      style={thumb}
      key={image.name}
    >
      <div
        style={thumbInner}
      >
        <img
          alt=""
          src={image.preview}
          style={img}
          onLoad={() => { URL.revokeObjectURL(image.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data urls to avoid memory leaks
    return () => images.forEach(image => URL.revokeObjectURL(image.preview));
  }, [images]);
  return (
    <DropZoneContainer className="container">
      <DropZone {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag and drop an image here or click to upload an  image</p>
      </DropZone>
      <aside
        style={thumbsContainer}
      >
        {thumbs}
      </aside>
    </DropZoneContainer>
  )
}

export default BannerDropZone;

const DropZoneContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin: 10px auto;
  border: 2px  black dotted;
  color: black;
  background-color: gray;
`

const DropZone = styled.div`
  text-align: center;
  padding: 15px;
  width: 90%;
  margin: auto;
  :hover{
    cursor: pointer;
  }
`
import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';


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
   

function BannerDropZone() {

     const [images, setImages] = useState([]);
     const {getRootProps, getInputProps} = useDropzone({
       accept: {'image/*': []},
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
     <section className="container">
     <div {...getRootProps({className: 'dropzone'})}>
       <input {...getInputProps()} />
       <p>Drag and drop an image here or click to upload an image</p>
     </div>
     <aside 
     style={thumbsContainer}
     >
       {thumbs}
     </aside>
   </section>
  )
}

export default BannerDropZone;

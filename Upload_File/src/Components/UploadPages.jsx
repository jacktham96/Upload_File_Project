import React, { useState } from 'react'
import { storage } from './firebase'
import { ref , uploadBytes } from 'firebase/storage'

const UploadPages = () => {

  const [imageUpload , setImageUpload] = useState(null)

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage , `images/${imageUpload.name}`)
    uploadBytes(imageRef , imageUpload).then(()=>{
      alert('image uploaded')
      console.log('test');
    })
  }
  
  return (

    <div className='upload-container mt-32  text-center flex flex-col items-center'>
        <h1 className='text-3xl py-7'>Upload File</h1>

        <div className='border-2 border-dashed flex flex-col justify-center gap-5 p-20 '>
            <input 
              type="file" 
              onChange={(event)=>{
                setImageUpload(event.target.files[0])
              }}
            />
            <i>Icon</i>
            <button className='' onClick={uploadImage}>Upload Image</button>

        </div>



        <output className='border-2 border-white  p-20 text-left'>
            <h1>output</h1>
        </output>


    </div>

  )
}

export default UploadPages
import React, { useState , useEffect} from 'react'
import { storage } from './firebase'
import { ref , uploadBytes, listAll, list, getDownloadURL } from 'firebase/storage'

const UploadPages = () => {

  const [imageUpload , setImageUpload] = useState(null)
  const [imageList , setImageList] = useState([])

  const imageListRef = ref(storage,'images/')

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage , `images/${imageUpload.name}`)
    uploadBytes(imageRef , imageUpload).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        setImageList((prev)=>[...prev,url])
      })
    })
  }

  useEffect(()=>{
    listAll(imageListRef).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setImageList((prev) => [...prev,url])
        })
      })
    })
  },[])
  
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
            <button className='bg-green py-4 mt-5' onClick={uploadImage}>Upload Image</button>

        </div>



        <output className=' p-20 text-left'>
            {imageList.map((url)=>{
              return <img className='object-cover h-auto w-80 my-5' src={url} alt="" />
            })}
        </output>


    </div>

  )
}

export default UploadPages
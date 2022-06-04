import React from 'react'

const UploadPages = () => {
  return (
    <div className='upload-container mt-32  text-center flex flex-col items-center'>
        <h1 className='text-3xl py-7'>Upload File</h1>

        <label className='border-2 border-dashed flex flex-col justify-center gap-5 p-20 '>
            <input type="file" name='file' capture class='sr-only'/>
            <i>Icon</i>
            <span className='text-lg'>File to upload</span>
        </label>

        <output className='border-2 border-white  p-20 text-left'>
            <h1>output</h1>
        </output>


    </div>

  )
}

export default UploadPages
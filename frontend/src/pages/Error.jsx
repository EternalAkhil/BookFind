import React from 'react'
import { BiError } from "react-icons/bi";

const Error = () => {
  return (
    <div>
      <h1 className='text-4xl text-center text-white mt-10 font-bold'>
      <BiError className='inline-block mr-4 size-20'/>
      404 PAGE NOT FOUND</h1>
    </div>
  )
}

export default Error

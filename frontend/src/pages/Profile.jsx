import React from 'react'
import { useEffect } from 'react'
import { findprofile,updateprofile } from '../services/findprofile'
import { useState } from 'react'
import { FaUser } from "react-icons/fa";
import Navbar from '../components/Navbar';

const Profile = () => {
  const [profileinfo,setProfileinfo] = useState([])
  const [isprofile,setIsprofile] = useState(true)
  // edit profile function
  const editprofile =()=>{
    setIsprofile(false)
    console.log("hello")
  }
  // handle input change
  const handlechange  = (e)=>{
    setProfileinfo({...profileinfo,[e.target.name]:e.target.value})
  }

  const handlesubmit = async(e)=>{
    e.preventDefault();
    const result = await updateprofile(profileinfo);
    const data = await result.json()
    console.log(data)
    if (data.updateduser){
      alert("update successful")
      setIsprofile(true)
    }
  }
  useEffect(() => {
    const fetchprofile = async () => {
      try {
        const result = await findprofile();
        const data = await result.json()
        const profile = data.data
        setProfileinfo(profile)

      }
      catch (error) {
        console.error(error)
      }
    }
    fetchprofile();

  }, [])
  return (
    <>
    <Navbar/>
    <div className='flex flex-col bg-transparenet text-white justify-center items-center w-full'>
      
      <FaUser className='text-8xl inline-block mt-8' />

      {isprofile ?  <div className='text-white text-xl mt-8 max-w-1/3 mx-auto p-4 flex flex-col items-center justify-center backdrop-blur-lg bg-opacity-30 rounded-lg'>
        <p><b>Name:</b></p>
        <p><span>{profileinfo.name}</span></p>
        <hr/>
        <p><b>Email:</b></p>
        <p><span>{profileinfo.email}</span></p>
        <button className=' mt-4 mx-4 px-4 py-2 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text hover:scale-105 '
        onClick={editprofile}>Edit</button>
      </div>:
      <form className='w-1/3 mx-auto'>
      <div className='mb-2'>
        <label htmlFor="name" className='block'>Name</label>
        <input type="text" name="name" id="name" className='w-full rounded-md border-2 bg-transparent outline-none border-white p-2' onChange={handlechange} value={profileinfo.name} />
      </div>
      <div className='mb-2'>
        <label htmlFor="email" className='block'>Email</label>
        <input type="email" name="email" id="email" className='w-full rounded-lg border-2 border-white bg-transparent outline-none p-2' onChange={handlechange} value={profileinfo.email} />
      </div>
      <button className='bg-transparent backdrop-blur-lg bg-opacity-30 p-2 mt-4 rounded-md' onClick={handlesubmit}>Save</button>
      </form>
      }
     
    </div>
    </>
  )
}

export default Profile

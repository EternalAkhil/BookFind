import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from 'react';
import { registration } from '../services/authservice.js'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const Signup = () => {
 
  const navigate = useNavigate()
  const [userdetails, setUserdetails] = useState({})
  const [alldetails, setAlldetails] = useState(true)
  const [error, setError] = useState()

  // input handling function
  const handlechange = (e) => {
    setUserdetails({ ...userdetails, [e.target.name]: e.target.value })

  }

  // submissin logic
  const handlesubmit = async (e) => {
    e.preventDefault()
 
    if (!userdetails.name || !userdetails.email || !userdetails.password) {
      setUserdetails({ ...userdetails })
      setError("Please enter all fields!");
    }
    else {
      setError("")
      try {
        const res = await registration(userdetails)
        const data = await res.json();
        alert(data.message);
        if (data.users) {
          navigate("/login")
        }
      }
      catch (error) {
        alert(error.message)
      }

    }
  }
  return (
    <>
    <Navbar/>
      <div className='text-white bg-transparent'>
        <h1 className='text-4xl mt-20 text-center  flex items-center justify-center'><FaRegUserCircle className='mr-2' />Register</h1>
        <form className='w-1/3 mx-auto'>
          <div className='mb-2'>
            <label htmlFor="name" className='block'>Name</label>
            <input type="text" name="name" id="name" className='w-full rounded-md border-2 bg-transparent outline-none border-white p-2' onChange={handlechange} value={userdetails.name} />
          </div>
          <div className='mb-2'>
            <label htmlFor="email" className='block'>Email</label>
            <input type="email" name="email" id="email" className='w-full rounded-lg border-2 border-white bg-transparent outline-none p-2' onChange={handlechange} value={userdetails.email} />
          </div>
          <div className='mb-2'>
            <label htmlFor="password" className='block'>Password</label>
            <input type="password" name="password" id="password" className='w-full rounded-lg border-2 border-white bg-transparent outline-none p-2' onChange={handlechange} value={userdetails.password} />
          </div>
          {error && <p className='mb-4 text-red-500 font-semibold'>{error}</p>}
          <button type="submit" className='bg-white text-black p-2 rounded-lg w-full  hover:cursor-pointer ' onClick={handlesubmit}>Register</button>
          <p className='text-center text-white hover:text-yellow-300 mt-4'><Link to={"/login"}>Login</Link></p>

        </form>

      </div>
    </>

  )
}

export default Signup

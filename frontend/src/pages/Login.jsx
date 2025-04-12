import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import { useState } from 'react';
import { userlogin } from '../services/authservice.js'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx';


const Login = () => {
  const navigate = useNavigate()
  const [userdetails, setUserdetails] = useState({})
  // input handling
  const handlechange = (e) => {
    setUserdetails({ ...userdetails, [e.target.name]: e.target.value })
  }
  // login fetch function
  const handlesubmit = async (e) => {
    e.preventDefault()
    if (!userdetails.email || !userdetails.password) {
      alert('enter all details')
    }
    else {
      try {
        const res = await userlogin(userdetails)
        const data = await res.json()
        alert(data.message);
        if (data.token) {
          localStorage.clear()
          localStorage.setItem("token", data.token)
          localStorage.setItem("user", data.finduser.email)
          localStorage.setItem("username", data.finduser.name)
          navigate("/")
        }
      }
      catch (error) {
        console.log(error.message)
      }


    }
  }
  //logout function

  return (
    <>
      <Navbar />
      <div className='bg-transparent text-white'>

        <h1 className='text-center text-4xl mt-20'><FaSignInAlt className='inline-block' /> Login</h1>
        <form className='w-3/4 lg:w-1/3 mx-auto mt-10' autoComplete='off'>
          <div className='mb-4'>
            <label htmlFor='email' className='block'>Email</label>
            <input type='email' 
            id='email' name='email' value={userdetails.email} className='w-full p-2 border-2 border-white outline-none rounded-lg  bg-transparent' onChange={handlechange} />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block'>Password</label>
            <input type='password'autoComplete='off' id='password' value={userdetails.password} name='password' className='w-full bg-transparent outline-none p-2 border-2 border-white rounded-lg' onChange={handlechange} />
          </div>
          <button className='w-full bg-white text-black p-2 rounded-lg hover:cursor-pointer' onClick={handlesubmit}>Login</button>
          <p className='text-center hover:text-yellow-300 text-white mt-4 hover:underline'><Link to={"/register"}>New user?Register</Link></p>
        </form>


      </div>
    </>

  )
}

export default Login

import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Landing = () => {
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(()=>{
        if(token){
            navigate('/home')
        }
        
    },[navigate])
  return (
    <>
    <Navbar/>
    <div className='flex flex-col justify-center items-center mt-6 lg:h-full'>
      <h1 className='lg:text-4xl text-xl text-white font-bold font-serif'>Welcome to BookFind......</h1>
      <br />
      <h1 className='lg:text-4xl text-xl text-white font-bold font-serif'>A place to browse your favourite books</h1>
      <Link className='bg-white text-black mt-8 p-4 rounded-lg hover:bg-yellow-300' to='/login'>Get Started -></Link>
    </div>
    </>
    
  )
}

export default Landing

import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Navbar from '../components/Navbar'
import coverpage from '../../public/assets/images.jpg'
import Bookcard from '../components/Bookcard';
import './Home.css'

const Home = () => {
  const [query, setQuery] = useState()
  const [books, setBooks] = useState([])
  const navigate = useNavigate()
  const token = sessionStorage.getItem("token")
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }

 
  }, [navigate])
  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("books"))){
      setBooks(JSON.parse(localStorage.getItem("books")))
      
    }
  },[])
  const findbook = async () => {
    try {
      const book = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBUJQxwz5YlFcrb9WRncLNs7mxQ1jg6Dws`)
      const data = await book.json()
      const items = data.items;
      setBooks(items)
      localStorage.setItem("books",JSON.stringify(items))

    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <Navbar/>
    <div className='home p-4'>
      <div className="hero text-white w-full flex flex-col gap-16 mb-8">
        
        <h1 className='text-center text-xl lg:text-4xl mt-8'>Welcome to BooksFind<i>Find your favourite books in a click</i></h1>

        <div className="mt-8 flex justify-center items-center ">
          <input type="text" className="w-full lg:w-1/2 h-full p-3 border rounded-lg border-gray-100 border-solid bg-transparent outline-none hover:bg-opacity-100 text-lg" placeholder='search...' value={query} onChange={(e) => setQuery(e.target.value)} />
          <FaSearch className='size-12 ml-4 border p-2 hover:scale-105 hover:cursor-pointer hover:bg-white hover:fill-black rounded-lg' onClick={findbook} />
        </div>
      </div>

      <div className='mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
        {
        books.map((item, index) => {
          const id = item?.id;
          const preview = item?.volumeInfo?.previewLink || "hello"
          const title = item.volumeInfo?.title;
          const url = item.volumeInfo?.imageLinks?.thumbnail || coverpage;
          const desc = item.volumeInfo?.description || 'No description available';
          let author = item.volumeInfo?.authors || ['Unknown author'];
          author = author.join(', ');

          return (
            <Bookcard id={id} preview={preview} title={title} url={url} desc={desc} author={author} index={index} />
          );
        })}
      </div>
    </div>
    </>
  )
}

export default Home

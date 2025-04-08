import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { addfav } from '../services/addfavservice.js';
import { useState } from 'react';
const Bookcard = ({ id, preview, title, url, desc, author, index }) => {
  const [favsymbol, setFavsymbol] = useState(true)
  const addfavourite = async (e, id, title, url, desc, author, preview) => {
    try {

      const favdetails = { id: id, title: title, url: url, desc: desc, author: author, preview: preview };
      const result = await addfav(favdetails);
      const data = await result.json();
      setFavsymbol(false);
    }
    catch (error) {
      console.error(error);
    }


  }
  return (

    <div key={index} className='h-[600px] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative text-white backdrop-filter backdrop-blur-xl bg-opacity-50'>
      <div className='h-[300px] flex justify-center   rounded-lg relative overflow-hidden p-2'>
        <img src={url} alt={title} className='object-fill w-full h-full rounded-lg' />
        {favsymbol ? (
          <FaRegHeart className='absolute bottom-4 hover:scale-150 hover:cursor-pointer right-4 size-6 fill-white' onClick={(e) => addfavourite(e, id, title, url, desc, author, preview)} />
        ) : (
          <FaHeart className='absolute hover:cursor-pointer bottom-4 hover:scale-150 right-4 size-6 fill-white' />
        )}
      </div>
      <div className='p-4 max-h-[240px] overflow-hidden'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='text-white mb-2'>Author: {author}</p>
        <p className='text-white'>{desc}</p>


        {/* Add a preview button */}
        

      </div>
      <button className='mt-4 mx-4 px-4 py-2 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white hover:bg-opacity-30 transition duration-300'>
          <a href={preview} target="_blank">Preview</a>
        </button>

    </div>
  )
}

export default Bookcard

import React from 'react'
import { FaHeartCircleMinus } from "react-icons/fa6";
import { deleteFav } from '../services/addfavservice.js'

const Bookcardp = ({ removeid, preview, title, url, desc, author, index, onDelete }) => {
    const removefavourite = async (removeid) => {
        try {
            const result = await deleteFav(removeid);
            const data = await result.json()
            onDelete(removeid)
        }
        catch (error) {
            console.error(error);
        }


    }
    return (

        <div key={index} className=' h-[600px] p-2  rounded-lg shadow-lg overflow-hidden  bg-transparent bg-opacity-30 backdrop-blur-lg text-white hover:shadow-xl transition-shadow duration-300 relative'>
            <div className='h-[300px] flex justify-center border rounded-lg relative overflow-hidden'>
                <img src={url} alt={title} className='object-fill w-full h-full' />
                <FaHeartCircleMinus className=' absolute bottom-4 right-4 size-6 fill-white hover:cursor-pointer hover:scale-150 transition duration-300 '
                    onClick={() => removefavourite(removeid)} />
            </div>
            <div className='p-4 overflow-hidden max-h-[240px]'>
                <h2 className='text-xl font-bold mb-2'>{title}</h2>
                <p className=' mb-2'>Author: {author}</p>
                <p className=''>{desc}</p>
            </div>
            <button className='mt-4 mx-4 px-4 py-2 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white hover:bg-opacity-30 transition duration-300'>
                <a href={preview} target="_blank">Preview</a>
            </button>
        </div>
    )
}


export default Bookcardp

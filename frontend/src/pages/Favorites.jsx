import React from 'react'
import { useEffect } from 'react'
import { displayfav } from '../services/addfavservice.js'
import Navbar from '../components/Navbar'

import { useState } from 'react'
import Bookcardp from '../components/Bookcardp.jsx'

const Favorites = () => {
    const [favs, setFavs] = useState([])
    const [deleted, setDeleted] = useState(false)
    useEffect(() => {
        const fetchfavorites = async () => {
            try {
                const result = await displayfav();
                const favourites = await result.json();
                setFavs(favourites.findfav);

            }
            catch (error) {
                console.log(error)
            }
        }
        fetchfavorites();
    }, [])
    const handleDelete = (id) => {
        const updatedFavs = favs.filter(item => item._id !== id);
        setFavs(updatedFavs);
        setDeleted(true)
        setTimeout(() => { setDeleted(false) }, 3000)
        // Optionally, update the backend or local storage
    };
    return (
        <div>
            <Navbar/>
            {deleted &&
                <div className='rounded-lg shadow-lg  p-2 mt-8 mx-1/4 w-auto flex justify-center'>
                    <h1 className='text-3xl text-center text-blue-400'>Item deleted succesfully!</h1>

                </div>}
            <h1 className='text-center text-4xl text-white font-bold'>Favourites</h1>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 mt-8 gap-4 p-4'>
                {favs.map((item, index) => {
                    return (
                        <Bookcardp removeid={item._id} title={item.title} url={item.url} desc={item.desc} author={item.author} index={index} preview={item.preview} onDelete={handleDelete} />
                    )
                })}
            </div>

        </div>
    )
}

export default Favorites

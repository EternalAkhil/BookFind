import mongoose from "mongoose";


import {fav} from '../models/fav.js'
const addfav = async(req,res)=>{
    try{
        const {id,email,title,url,desc,author,preview} = req.body;
        const findid = await fav.findOne({bookid:id});
        if (findid){
            return res.status(400).json({message:"book already exists in favourites"})
        }
        const newfav = await fav.create({bookid:id,email:email,title:title,url:url,desc:desc,author:author,preview:preview})
        return res.status(200).json({message:"added to favourites"})
    }
    catch(error){
        return res.status(404).json({message:error})
    }
}
// FUNCTION TO FETCH FAVOURITES FROM DB
const displayfav = async(req,res)=>{
    try{
        const {email} = req.body;
        const findfav = await fav.find({email:email});
        if (findfav){
            return res.status(200).json({message:"favourites fetched",findfav})
        }
        else{
            return res.status(400).json({message:"no books available"})
        }

    }
    catch(error){
        return res.status(404).json({message:error})
    }
}

// FUNCTION TO DELETE FAVORITE FROM DB
const deleteFav =async(req,res)=>{
    
    try{
        const {id} = req.params;
        const result = await fav.findByIdAndDelete(id);
        res.status(200).json({message:'item deleted'})
    }
    catch(error){
        res.status(404).json({message:error})
    }

}
export {addfav,displayfav,deleteFav}
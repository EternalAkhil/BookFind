import { user } from "../models/user.js";
import jwt from "jsonwebtoken"
// find profile
const displayprofile = async (req,res)=>{
    try{
        const {token} = req.params;
        const id = jwt.decode(token,process.env.SECRET_KEY).id;
        const data = await user.findById({_id:id})
        return res.json({message:"token recieved",data})

    }
    catch(error){
        res.status(404).json({message:error})
    }
  
}
// update profile
const updateprofile = async(req,res)=>{

    try{
        const name = req.body.name;
        const id = req.body._id;
        const updateduser =await user.findByIdAndUpdate(id,{$set:{name}},{new:true})
        return res.status(200).json({message:"update successful",updateduser})

    }
    catch(error){
        res.json({message:error.message})
    }

 
}
export {displayprofile,updateprofile}
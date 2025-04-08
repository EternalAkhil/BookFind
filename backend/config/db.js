import mongoose from 'mongoose'

export const  connectdb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGOURL);
        console.log("connected to database");
    }
    catch(error){
        console.log(error);
    }

}
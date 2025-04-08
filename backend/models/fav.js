import mongoose from "mongoose";
const favschema = new mongoose.Schema({
    email:{type:String,
        required:true
    },
    bookid:{type:String,
        required:true
    },
    
    title:{type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    author:{
        type:String

    },
    preview:{
        type:String
    }

})
const fav = mongoose.model('fav',favschema)
export {fav}
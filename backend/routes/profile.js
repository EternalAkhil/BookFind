import express from 'express'
import { displayprofile,updateprofile } from '../controllers/profilecontroller.js'

const router2 = express.Router()
router2.get("/displayprofile/:token",displayprofile)
router2.put("/update",updateprofile)
export {router2}
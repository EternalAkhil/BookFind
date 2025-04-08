import express from 'express'
import {addfav,displayfav,deleteFav} from '../controllers/favouritecontroller.js'
const router1 = express.Router();
router1.post('/addfav',addfav)
router1.post('/displayfav',displayfav)
router1.delete('/deletefav/:id',deleteFav)
export {router1}
import express from 'express'
import dotenv from 'dotenv'
import { connectdb } from './config/db.js';
import { router } from './routes/authentication.js'
import {router1} from './routes/addfav.js'
import {router2} from './routes/profile.js'

import cors from 'cors'
import bodyParser from 'body-parser';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json())
app.use('/api/user',router)
app.use('/api/user/fav',router1)
app.use('/api/user/profile',router2)
app.listen(process.env.PORT,()=>{
    connectdb();
    console.log(`server is running at port ${process.env.PORT}`);
})

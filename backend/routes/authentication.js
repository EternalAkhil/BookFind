import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {register,login} from '../controllers/userauth.js';
const router = express.Router();
router.post('/login',login);
router.post('/register',register);
export {router}
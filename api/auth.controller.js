import User from "../Models/User.models.js";
import bcryptjs from 'bcryptjs';
import { errorHandling } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const register =  async (req,res,next)=>{
   const{username,email,password} = req.body;
   const hashPassword = bcryptjs.hashSync(password,10);

   const newUser = new User({username,email,password : hashPassword});

   try {
    await newUser.save();
    res.status(201).json("user registered sucessfully");
    
   } catch (error) {
    next(error);
    
    
   }
    
}

export const login = async (req, res, next) => {
   const { email, password } = req.body;
   try {
     const validUser = await User.findOne({ email });
     if (!validUser) return next(errorHandler(404, 'User not found!'));
     const validPassword = bcryptjs.compareSync(password, validUser.password);
     if (!validPassword) return next(errorHandling(401, 'Wrong credentials!'));
     const token = jwt.sign({ id: validUser._id }, process.env.Jwt);
     const { password: pass, ...rest } = validUser._doc;
     res
       .cookie('access_token', token, { httpOnly: true })
       .status(200)
       .json(rest);
   } catch (error) {
     next(error);
   }
   }

import User from "../Models/User.models.js";
import bcryptjs from 'bcryptjs';
import { errorHandling } from "../utils/error.js";

export const signup =  async (req,res,next)=>{
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


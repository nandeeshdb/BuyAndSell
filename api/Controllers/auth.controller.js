import User from "../Models/User.models.js";
import bcryptjs from 'bcryptjs';

export const signup =  async (req,res)=>{
   const{username,email,password} = req.body;
   const hashPassword = bcryptjs.hashSync(password,10);

   const newUser = new User({username,email,password : hashPassword});

   try {
    await newUser.save();
    res.status(201).json("user registered sucessfully");
    
   } catch (error) {
    res.status(500).json(error.message)
    
   }
    


}


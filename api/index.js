import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
        console.log('connection is sussessfull')
    })
    .catch((error)=>
    {console.log(error.message)});

const app = express();
app.listen(3000,()=>{
    console.log("app is running in server 3000")
    console.log("app is running in server 3000");
});
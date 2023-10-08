import express from 'express';

 const router = express.Router();

router.get('/test',(req,res)=>{
    res.json({
        messsage:"hello world"
    });
});

export default router;
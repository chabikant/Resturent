const express= require("express");
const router = express.Router();
const adminModel=require('../models/admin');
const restModel=require('../models/rest');


// for all restaurant
router.get('/', async(req,res)=>{
    const allrest=await restModel.find({})
    return res.send(allrest);
})

// for 1 restaurant
router.get('/:id',async(req,res)=>{
    const {id}=req.params;
    const restaurant=await restModel.findById(id);
    return res.send(restaurant);
})


// post your commnent for 1 restaurent
router.post('/:id/comment/new',async(req,res)=>{
    const {id}=req.params;
    const restaurant=await restModel.findById(id);
    const uname="anonymous"
   
    
    const cmt={
        text:req.body.comment,
        username:uname,
    }

    const allComment=restaurant.comments
    allComment.push(cmt)
    await restModel.findByIdAndUpdate(id,{$set:{comments:allComment}})
    

    res.send(restaurant)

})




module.exports=router;
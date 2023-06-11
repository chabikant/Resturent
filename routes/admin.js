const express= require("express");
const router = express.Router();
const adminModel=require('../models/admin');
const restModel=require('../models/rest');





router.post("/addadmin",async(req,res)=>{
    console.log(req.body)
    const Admin=new adminModel(req.body) 
    await Admin.save();
    res.send("Data Added")
})

router.post("/addrestaurant",async(req,res)=>{
    console.log(req.body)
    const Restaurant=new restModel(req.body) 
    await Restaurant.save();
    res.send("Data Added")
})

router.get('/allrestaurant', async(req,res)=>{
    const allrest=await restModel.find({})
    return res.send(allrest);
})

router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    console.log(req.params)
    await restModel.deleteOne({_id: id});
    res.send("restaurant Deleted")
})

router.patch('/update/:id',async(req,res)=>{
    const {id}=req.params
    await restModel.findByIdAndUpdate(id,{...req.body});
    res.send("Restaurant update");
})


module.exports=router;
const mongoose=require("mongoose");

const   AdminSchema=new mongoose.Schema({
    username:{
        type:String,
        default:"Chabi",
    },
    password:{
        type:String,

    },
    role:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("Admin",AdminSchema)
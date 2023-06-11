const mongoose=require("mongoose");

const ResturentSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength:200,
    },
    description:{
        type: String,
        required: true,
        maxlength:200,
    },
    comments:[
       { 
        text:String,
        username:{
            type:String,
            default:"anonymous"
        }
       }
    ]

})
module.exports=mongoose.model("resturent",ResturentSchema)
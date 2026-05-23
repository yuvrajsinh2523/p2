const express=require("express");
const mongoose=require("mongoose");

const dataSchema=mongoose.Schema({
    title:{
         type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        name:{
            type:String,
            default:"image link"
        },
        url:{
            type:String,
            default:"https://cdn.creazilla.com/3344c22b2c3e6cba42f6724a7b2c7ccb.jpeg",
         
        }
    },
    price:{
        type:String,
        default:true
    }
})

const Ph=mongoose.model("Ph",dataSchema);
module.exports=Ph;

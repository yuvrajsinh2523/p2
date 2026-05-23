const express=require("express");
const mongoose=require("mongoose");
const PhData=require("./data.js");
const Ph=require("../models/m.js");


const MONGO_URL="mongodb://127.0.0.1:27017/ph";

main().then((res)=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    mongoose.connect(MONGO_URL);
}


const Inn=async ()=>{
 await Ph.deleteMany({});
 await Ph.insertMany(PhData.data);
}
Inn();

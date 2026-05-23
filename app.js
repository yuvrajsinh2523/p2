const express=require("express");
const app=express();
const path=require("path");
const port=8080;
const mongoose=require("mongoose");
const methodoverride=require("method-override");
const ejsMate=require("ejs-mate")
//use all the apps here
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
app.engine("ejs",ejsMate);

//require device file 
const Ph=require("./models/m.js");
// const PhData=require("./init/index.js");


const MONGO_URL="mongodb://127.0.0.1:27017/ph";

main().then((res)=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    mongoose.connect(MONGO_URL);
}
//here start route


app.listen(port,()=>{
    console.log("your port is connected");
})

app.get("/home",async (req,res)=>{
   let allData= await Ph.find();
   res.render("listing/home.ejs",{allData});
})

app.get("/home/new",(req,res)=>{
    res.render("listing/new.ejs");
})

app.get("/show/:id",async (req,res)=>{
    let {id}=req.params;
    let detail=await Ph.findById(id);
    res.render("listing/show.ejs",{detail});
})

app.post("/new",async (req,res)=>{ 

    let newadd=new Ph(req.body.add);
    await newadd.save();
    res.redirect("/home")
})

app.get("/show/:id/edit",async (req,res)=>{
    let {id}=req.params;
   let details= await Ph.findById(id);
    res.render("listing/edit.ejs",{details});
})

app.put("/show/:id",async (req,res)=>{
    let {id}=req.params;
    let hello=await Ph.findByIdAndUpdate(id,{...req.body.add});
    res.redirect(`/show/${id}`);
})

app.get("/home/about",(req,res)=>{
    res.render("listing/about.ejs");
})

app.get("/home/chocolates",(req,res)=>{
    res.render("listing/choco.ejs");
})

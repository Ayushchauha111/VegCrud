const express =require('express') // 1 step server creation  // 2step database connection -> local cloud  //model //routes
const mongoose=require('mongoose')
const Vegi=require("./model/veg")
const app=express();
const PORT=process.env.PORT || 3000
app.use(express.json())   //javascrip object
mongoose.connect("mongodb+srv://Ayush123:Ayush@123@cluster0.7dira.mongodb.net/CRUDAPP?retryWrites=true&w=majority",{useNewUrlParser:true});

//routes
//c r u d
//promise .then().catch()
//json or javascript obj

//create vegitable api
app.get("/create",async (req,res)=>{

//nya create name or cal obj
const veg=new Vegi({name:"carrot", Calorie:5});

//databse daalna  +  error 
     
try{
    await veg.save();
}
catch(err)
{
    console.log(err)
}

})


app.listen(PORT,()=>{console.log("server is running")})




//homework  ->  1.make this  2. read,delete
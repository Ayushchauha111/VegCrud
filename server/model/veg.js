const mongoose=require('mongoose')
//validation sanitization
const vegischema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Calorie:{
        type:Number,
        required:true
    }
})

const veg=mongoose.model("vegitable",vegischema);

module.exports=veg
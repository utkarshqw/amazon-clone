const mongoose = require("mongoose") 

const mobileSchema = new mongoose.Schema({
    star:{type:Number, required:true},
    price:{type:Number, required:true},
    heading:{type:String, required:true}, 
    mainimg:{type:String, required:true} 
})

const mobileModel = mongoose.model("Mobile",mobileSchema) 
module.exports = mobileModel 
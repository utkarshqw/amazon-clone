
const mongoose = require("mongoose")

const commentSchema =  new mongoose.Schema({
   user: {type:mongoose.Schema.Types.ObjectId, required:true,ref:"User"},
   heading:{type:String},
   message:{type:String, required:true},
   stars:{type:Number},
   parentId:{type: mongoose.Schema.Types.ObjectId, ref:"Comment"}

},{
    timestamps:true,
})

const commentModel = mongoose.model("Comment",commentSchema)
module.exports = commentModel





const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    password:{type:String,required:true},
    created_at:{type:Date,default:Date.now().valueOf()},
    updated_at:{type:Date,default:Date.now().valueOf()}
})


const User= mongoose.model('users',userSchema)
module.exports = User
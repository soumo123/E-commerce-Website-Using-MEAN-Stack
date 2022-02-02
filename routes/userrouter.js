const express = require('express');
const router = express.Router()
const Users = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const checkAuth = require('../middleware/check-auth')

router.post('/signup', async(req, res) => {
    
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.json({success:false,message:"hasing issue"})
        }else{
            const user = new Users({
                name:req.body.name,
                email:req.body.email,
                password:hash
            })
            user.save()
            .then(()=>{
                res.json({success:true, message:"Account has succesfully created"})
            })
            .catch((err)=>{

                if(err.code===11000){
                    return res.json({success:false, message:"Email already exist"})
                }
                res.json({success:false, message:err})
            })
        }
    })

})





router.post('/login', (req, res) => {
   Users.find({email:req.body.email})
   .exec()
   .then((result)=>{
    if(result.length < 1){
        res.json({success:false, message:"User not found"})
    }
    const user = result[0]
    bcrypt.compare(req.body.password,user.password,(err,ret)=>{
        if(ret){

            const payload={
                userId:user._id
            }
            const token = jwt.sign(payload,"webpatch")
            return res.json({success:true,token:token,users:user, message:"Login succesfully"})
        }else{
            return res.json({success:true, message:"Password Don't match"})
        }
    })
   }).catch(err=>{
       res.json({success:false, message:"Signin Unsuccesful"})
   })
})



router.get('/profile/:id',checkAuth,(req,res)=>{

const userId = req.userData.userId

    Users.findById(userId)
    .exec()
    .then((result)=>{
        res.json({success:true, data:result})
    }).catch(err=>{
        res.json({success:false, message:"Server  error"})
    })
})








module.exports = router
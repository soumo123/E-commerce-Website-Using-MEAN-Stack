const express = require('express');
const productRoute = express.Router()
let products = require('../models/productSchema')



productRoute.route('/add-product').post((req, res, next)=>{
    products.create(req.body,(error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//get products

productRoute.route('/').get((req,res,next)=>{
    products.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//get products ny ID//
productRoute.route('/get-product/:id').get((req,res,next)=>{
    products.findById(req.params.id,(error,data)=>{
        if(error){
            return error(next)
        }else{
            res.json(data)
        }
    })
})

//update product//

productRoute.route('/update-product/:id').put((req,res,next)=>{
    products.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>{
        if(error){
            return error(next)
            console.log(error)
        }else{
            res.json(data)
            console.log("Product Update succesfully")
        }
    })
})

//delete product//

productRoute.route('/delete-product/:id').delete((req,res,next)=>{
    products.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error){
            return error(next)
            console.log(error)
        }else{
            res.status(200).json({
                msg:data 
            })
        }
    })
})


module.exports = productRoute
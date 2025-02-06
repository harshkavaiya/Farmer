import express from "express";
import bcryptjs from "bcryptjs"
import UserModel from "../model/UserModel.js"
const router=express.Router()

router.post("/userSignup",async (req,res)=>{
    try{
        const {name,email,mono,password,country,state,city,pincode,address} = req.body

       
    
        const existEmail = await UserModel.findOne({email:email})
    
        if(existEmail){
            return res.status(400).json({
                message:"User Already registred"
            })
        }
    
        const hashedPassword = bcryptjs.hash(password,10)
    
        await UserModel.create({
            name:name,
            email:email,
            mono:mono,
            password:hashedPassword,
            country:country,
            state:state,
            city:city,
            pincode:pincode,
            address:address,
            })
    
            res.status(201).json({message:"user signup success"})
    
        }
        catch(error){
        console.log(error)
        res.status(500).json({message:"server error"})
        }
})

export default router







import { validationResult } from "express-validator"
import { User } from "../models/user.model.js"
import {tryCatch} from "../utils/helper.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiRsponse } from "../utils/ApiRsponse.js"


const userSignup=tryCatch(async (req,res)=>{
const result = validationResult(req)
  if (result.isEmpty()) {

    const body =req.body

    const isUser=await User.findOne({
        email:body.email
    })

    if (isUser) {
       throw(new ApiError(400,"User Is Already Exist"));
        
    }

    const user = await User.create(body)
    const token = user.generateToken({id:user._id})
    res.cookie("auth-token",token,{ maxAge: 900000, httpOnly: true }).json(new ApiRsponse(200,"user is signup successfully"))
    return
  }

  throw(new ApiError({ errors: result.array() }));
})

const userLogin=tryCatch(async (req,res)=>{
  const result = validationResult(req)
    if (result.isEmpty()) {
  
      const body =req.body
  
      const user=await User.findOne({
          email:body.email
      })
  
      if (!user) {
          throw (new ApiError(400,"User Can't Exist"));
          
      }
      const token = user.generateToken({id:user._id})
      res.cookie("auth-token",token,{ maxAge: 900000, httpOnly: true }).json(new ApiRsponse(200,"user is login successfully"))
      return
    }
  
    throw new ApiError({ errors: result.array() });
  })

const userLogout =tryCatch(async (req,res)=>{
  const user=req.user
  if (!user) {
    throw (new ApiError(400,"Login First"));
  }
  res.cookie("auth-token","",{maxAge:0,httpOnly:true}).json(new ApiRsponse(200,"user is logout successfully"));
  return
})


export {userSignup,userLogin,userLogout}
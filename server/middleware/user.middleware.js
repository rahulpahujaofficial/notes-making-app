import jwt from "jsonwebtoken"
import { tryCatch } from "../utils/helper.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"

const getUser=tryCatch(async(req,res,next)=>{
        const authCookie=req.cookies["auth-token"]
    if(!authCookie||authCookie===""){
        throw new ApiError(400,"Login First");
    }

    const userId =jwt.verify(authCookie,process.env.TOKEN_KEY)

    if(!userId){
        res.json (new ApiError(400,"User Can't Exist"));
    }
    const user=await User.findById(userId.id)
    req.user=user
    
    next()
})

export {getUser}
import { ApiError } from "./ApiError.js";

const tryCatch=(fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.json (new ApiError(400,error.message));
    }
}

export {tryCatch}
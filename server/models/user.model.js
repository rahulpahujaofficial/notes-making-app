import mongoose ,{Schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    fullName:{
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String
        }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    username:{
        type:String,
        required:true,
        lowercase:true
    }
},{
    timestamps:true
})


userSchema.methods.generateToken=(data)=>{
    const tokenKey=process.env.TOKEN_KEY
    const token= jwt.sign(data,tokenKey,{ expiresIn: '2d' })
    return token
}

userSchema.pre("save",function(next){
    if(!this.isModified('password')) return next()
        
    this.password=bcrypt.hashSync(this.password,10)
    next()
})

export const User= mongoose.model('User', userSchema);
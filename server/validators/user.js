import { body } from "express-validator";

const signUpValidator=()=>{
    return[
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isLength({min:5}),
    body("username").notEmpty().isLowercase(),
    body("fullName.firstName").notEmpty()
]}

const LoginValidator=()=>{
    return[
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isLength({min:5})
]}

export {signUpValidator,LoginValidator}
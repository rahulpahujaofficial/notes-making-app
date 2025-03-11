import express from "express"
import { userLogin, userLogout, userSignup } from "../controllers/user.js";
import { LoginValidator, signUpValidator } from "../validators/user.js";
import { getUser } from "../middleware/user.middleware.js";

const routes=express.Router()

routes.post("/signup",signUpValidator(),userSignup);
routes.post("/login",LoginValidator(),userLogin);
routes.post("/Logout",getUser,userLogout);

export default routes
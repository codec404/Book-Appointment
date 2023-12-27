import express from "express";
import { authController, loginController, registerController } from "../controllers/userController.js";
import { userAuth } from "../middlewares/userAuth.js";

const router = express.Router();

//Routes
//Register
router.post('/register',registerController)

//Login
router.post('/login', loginController)

//Auth
router.post('/getUserData',userAuth, authController)

export default router
import express from "express"
import {Register,Login,Home} from "../controller/auth.js"
import { verifyToken } from "../middleware/auth.js";
//creating the router
const router = express.Router();
//config the router
router.post("/register",Register);
router.post("/login",Login);
router.get("/", verifyToken,Home) //protected route

export default router;
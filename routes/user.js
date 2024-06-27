import express from "express"
const router = express.Router()
import User from "../models/User.js";
import { register } from "../controllers/users.js";


router.post("/register", register)

export default router;
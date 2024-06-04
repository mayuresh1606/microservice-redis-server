import express from "express"
const router = express.Router()
import User from "../models/User.js";


router.post("/register", (req, res) => {
    try{
        const { fName, lName, email, password } = req.body;
        console.log(email, password);
    }catch(error){
        console.error(error);
    }
})

export default router;
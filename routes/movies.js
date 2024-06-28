import express from "express"
import { createMovie } from "../controllers/movie.js"

const router = express.Router()


router.post("/createMovie", createMovie)


export default router;
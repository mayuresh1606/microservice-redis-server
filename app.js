import { connectDb } from "./db/connect.js"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import userRouter from "./routes/user.js"
import movieRouter from "./routes/movies.js"

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/movie", movieRouter);
app.use("/user", userRouter);

app.listen(4000, () => {
    try{
        connectDb().then(() => {
            console.log("Server connected on port 4000...")
        })        
    }catch(error){
        console.error(error);
    }
})
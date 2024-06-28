import mongoose from "mongoose";

const TheatreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    screens: {
        type: Number,
        required: true
    },
})


const Theatre = mongoose.model("Theatre", TheatreSchema)
export default Theatre;
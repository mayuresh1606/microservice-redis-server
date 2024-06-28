import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    genre: {
        type: Array,
        required: true
    },
    movieImage: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model("Movie", MovieSchema)

export default Movie;
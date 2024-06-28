import checkFields from "../helpers/checkFields.js";
import Movie from "../models/Movie.js";

export const createMovie = async (req, res) => {
    try{
        const result = checkFields(req.body, 3);
        if (!result){
            return res.status(400).json({ message: `missing some fields!` });
        }
        const movie = await Movie.create(req.body)
        return res.status(202).json({message: `Movie ${movie.name} is created!`})
    }catch(error){
        console.error(error);
        return res.status(500).json({message: error._message})
    }
}
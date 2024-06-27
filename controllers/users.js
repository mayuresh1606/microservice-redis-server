export const register = async (req, res) => {
    try{
        const { fName, lName, email, password } = req.body;
        if (!fName){
            return res.status(400).json({ message: "First Name is required!" })
        }
        if (!lName){
            return res.status(400).json({ message: "Last Name is required!" })
        }
        if (!email){
            return res.status(400).json({ message: "Email is required!" })
        }
        if (!password){
            return res.status(400).json({ message: "Password is required!" })
        }
        const user = await User.create({
            fName,
            lName,
            email,
            password
        });
        console.log(user, "USER");
        return res.status(201).json({ message: "User Created Successfully!" })
    }catch(error){
        console.error(error);
    }
}
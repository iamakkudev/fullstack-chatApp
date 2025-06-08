import jwt from "jsonwebtoken"
import User from '../models/user.model.js';

export const isLoggedIn = async (req, res ,next) =>{
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({message: "Unauthorized - Please signUp/login"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({message: "Unauthorized - invalid token"})
        }
        const user = await User.findById(decoded.userId).select("-password")

        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        req.user = user;

        next()

    }catch(err){
         console.log("Error in isLoggedIn middleware", err.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}
import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
    
        if (!token) {
            return res.status(400).json({error: "Unauthorized: Token not found"})
        }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
        if (!decoded) {
            return res.status(400).json({error: "Unauthorized: Invalid token"})
        }
    
        const user = await User.findById(decoded._id).select('-password')
    
        req.user = user
    
        next()        
    } catch (error) {
        console.log("Error in protected route middlewae:", error.message);
        res.status(500).json({error:'Internal server error'})        
    }


}

export default protectedRoute
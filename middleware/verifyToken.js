import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyJwtToken = (roleRequired) => {
    return (req, res, next) => {
        // Extract token from the Authorization header
        const token = req.headers['authorization']?.replace('Bearer ', '').trim();

        if (!token) {
            return res.status(401).json({ msg: 'Token not found', success: false });
        }

        try {
            // Verify the token using the secret key
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded);
            req.user = decoded; // Assign the decoded token to req.user

            // Role-based access control
            if (req.user.admin !== roleRequired) {
                return res.status(403).json({ 
                    msg: `Access denied. Only ${roleRequired}s are allowed.`, 
                    success: false 
                });
            }

            // Continue to the next middleware or route handler
            next();
        } catch (error) {
            return res.status(401).json({ msg: 'Invalid token', success: false });
        }
    };
};

export default verifyJwtToken;

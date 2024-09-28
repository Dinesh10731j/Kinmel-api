import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyJwtToken = (roleRequired) => {
    return (req, res, next) => {
        
        const token = req.headers['authorization']?.replace('Bearer ', '').trim();

        if (!token) {
            return res.status(401).json({ msg: 'Token not found', success: false });
        }

        try {
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            console.log('This is decoded value of jwt',decoded);
          
            req.user = decoded; 

           
            if (req.user?.admin !== roleRequired) {
                return res.status(403).json({ 
                    msg: `Access denied. Only ${roleRequired} are allowed.`, 
                    success: false 
                });
            }

          
            next();
        } catch (error) {
            return res.status(401).json({ msg: 'Invalid token', success: false });
        }
    };
};

export default verifyJwtToken;

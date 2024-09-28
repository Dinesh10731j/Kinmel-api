import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyJwtToken = (req, res, next) => {
  
    const token = req.headers['authorization']?.replace('Bearer ', '').trim();


    if (!token) {
        return res.status(401).json({ msg: 'Token not found', success: false });
    }

    try {

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;

        console.log(req.user?.roles);

        
        if (req.user.roles !== 'admin') {
            return res.status(403).json({ msg: 'Access denied. Admins only.', success: false });
        }

        if (req.user.roles !== 'seller') {
            return res.status(403).json({ msg: 'Access denied. Sellers only.', success: false });
        }


        if(req.user.roles!=='user'){

            return res.status(403).json({msg:'Access denied. Users only',success:false});
        }

      
        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Invalid token', success: false });
    }
};

export default verifyJwtToken;

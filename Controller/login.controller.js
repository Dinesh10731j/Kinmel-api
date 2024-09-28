import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import UserModel from "../Model/users.model.js";
import dotenv from "dotenv";
dotenv.config();

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
  
    const user = await UserModel.findOne({ email });

   
    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }


    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials", success: false });
    }

    
    const token = jwt.sign(
      { id: user._id, email: user.email,roles:user?.role },
      process.env.JWT_SECRET,            
      { expiresIn: "1h" }              
    );

  
    res.status(200).json({
      msg: "Login successful",
      success: true,
      token:token, 
      role:user?.role,
      userid:user?._id,
    });

  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
};

export default Login;

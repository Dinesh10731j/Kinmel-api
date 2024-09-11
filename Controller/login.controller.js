import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import UserModel from "../Model/users.model.js";
import dotenv from "dotenv";
dotenv.config();

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await UserModel.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials", success: false });
    }

    // Generate JWT token after successful login
    const token = jwt.sign(
      { id: user._id, email: user.email }, // Payload
      process.env.JWT_SECRET,             // Secret key from environment variables
      { expiresIn: "1h" }                 // Token expiration time
    );

    // Send response with token
    res.status(200).json({
      msg: "Login successful",
      success: true,
      token:token, // Include the JWT token in the response
      role:user?.role,
      userid:user?._id,
    });

  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', error: err.message });
  }
};

export default Login;

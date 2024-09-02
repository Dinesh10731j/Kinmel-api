import UserModel from "../Model/users.model.js";
import bcrypt from "bcryptjs"

const Signup = async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;
    if (password !== confirmpassword) {
      return res.status(400).json({ msg: "Passwords do not match", success: false });
    }

    const hashPassword = await bcrypt.hash(password,10);
    const hashConfirmPassword = await bcrypt.hash(confirmpassword,10)
    await UserModel.create({ email, password:hashPassword, confirmpassword:hashConfirmPassword });

    res.status(201).json({ msg: "User created successfully", success: true });
  } catch (err) {
    res
      .status(500)
      .json({
        msg: "Internal server error",
        success: false,
        error: err.message,
      });
  }
};

export default Signup;

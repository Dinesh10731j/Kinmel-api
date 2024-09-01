import UserModel from "../Model/users.model.js";

const Signup = async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;
    await UserModel.create({ email, password, confirmpassword });

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

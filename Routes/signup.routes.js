import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },

  password: {
    type: String,
    required: [true, "Password id required"],
  },

  confirmpassword: {
    type: String,
    required: [true, "ConfrimPassword is requuired"],
  },
});

const UserModel = mongoose.Model(UserSchema, "Users");

export default UserModel;

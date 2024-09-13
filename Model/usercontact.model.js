import mongoose from "mongoose";

const userContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
  },

  email: {
    type: String,
    required: [true, "E-mail is required"],
    unique: true,
  },

  phone: {
    type: String,
    required: [true, "Phone is required"],
    unique: true,
  },

  message: {
    type: String,
    required: [true, "Message is requuired"],
  },
});

const userContactModel = mongoose.model("Contact", userContactSchema);

export default userContactModel;

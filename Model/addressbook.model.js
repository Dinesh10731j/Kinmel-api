import mongoose from "mongoose";

const addressBookSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required:[true,'userId is required']
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
});

const addressBookModel = mongoose.model("Useraddressbook", addressBookSchema);

export default addressBookModel;

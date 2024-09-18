import mongoose from "mongoose";

const paymentOptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Userid id required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  details: {
    type: String,
    required: [true, "Details is required"],
  },
},{timestamps:true});

const paymentOptionModel = mongoose.model("Paymentoption", paymentOptionSchema);

export default paymentOptionModel;

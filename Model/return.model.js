import mongoose from "mongoose";

const returnSchema = new mongoose.Schema(
  {
    comments: {
      type: String,
      required: [true, "Comment is required"],
    },
    orderId: {
      type: String,
      required: [true, "OrderId is required"],
    },
    productName: {
      type: String,
      required: [true, "ProductImage is required"],
    },
    reason: {
      type: String,
      required: [true, "Reason is required"],
    },
    productImage: {
      type: String,
      required: [true, "ProductImage is required"],
    },
    refundAmount: {
      type: String,
      required: [true, "Refund Amout is required"],
    },
    returnDate: {
      type: String,
      required: [true, "Return date is required"],
    },
    returnStatus: {
      type: String,
      default: "Pending",
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "userId is required"],
    },
  },
  { timestamps: true }
);


const returnModel = mongoose.model('Return',returnSchema);


export default returnModel;

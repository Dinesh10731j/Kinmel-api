import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    sellerId:{
    type:mongoose.Schema.ObjectId,
    required:[true,'Seller id is required'],

    ref:'User'

  },
  productCategory: {
    type: String,
    required: [true, "Product category is required"],
  },
  productDescription: {
    type: String,
    required: [true, "Product description is required"],
  },
  productImage: {
    type: String,
    required: [true, "Product image is required"],
  },
  productName: {
    type: String,

    required: [true, "Product name is required"],
  },
  productPrice: {
    type: String,
    required: [true, "Product price is required"],
  },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;

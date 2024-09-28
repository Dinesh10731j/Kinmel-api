import express from "express";
import addProduct from "../Controller/addproduct.controller.js";
const addProductRoute = express.Router();
import verifyJwtToken from "../middleware/verifyToken.js";

addProductRoute.post("/add-product",verifyJwtToken,addProduct);


export default addProductRoute;
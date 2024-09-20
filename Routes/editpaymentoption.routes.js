import express from "express";
import editPaymentOption from "../Controller/editpaymentoption.controller.js";

const editPaymentOptionRoute = express.Router();

editPaymentOptionRoute.patch("/edit-payment-option",editPaymentOption);


export default editPaymentOptionRoute;
import express from "express";
import paymentOption from "../Controller/paymentoption.controller.js";

const paymentOptionRoute = express.Router();

paymentOptionRoute.post("/payment-option", paymentOption);

export default paymentOptionRoute;

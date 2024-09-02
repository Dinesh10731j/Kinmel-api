import express from "express";
import PaymentConfig from "../Controller/paymentconfig.controller.js";
const PaymentConfigRoute = express.Router();


PaymentConfigRoute.get("/config",PaymentConfig);


export default PaymentConfigRoute;
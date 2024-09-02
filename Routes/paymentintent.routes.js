import express from "express";
import PaymentIntent from "../Controller/paymentintent.controller.js";


const PaymentIntentRoute = express.Router();


PaymentIntentRoute.post("/create-payment-intent",PaymentIntent);


export default PaymentIntentRoute;
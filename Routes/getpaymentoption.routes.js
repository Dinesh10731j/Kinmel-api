import express from "express";
import getPaymentOption from "../Controller/getpaymentoption.controller.js";

const getPaymentOptionRoute =  express.Router();

getPaymentOptionRoute.get("/payment-option/:userId",getPaymentOption);


export default getPaymentOptionRoute;
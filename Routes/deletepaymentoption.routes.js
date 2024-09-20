import express from "express";
import deletePaymentOption from "../Controller/deletepaymentoption.controller.js";

const deletePaymentOptionRoute = express.Router();

deletePaymentOptionRoute.delete('/delete-payment-option/:paymentOptionId',deletePaymentOption);


export default deletePaymentOptionRoute;
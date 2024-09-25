import express from "express";
import forgotPassword from "../Controller/forgotpassword.controller.js";


const forgotPasswordRoute = express.Router();

forgotPasswordRoute.post('/forgot-password',forgotPassword);



export default forgotPasswordRoute;
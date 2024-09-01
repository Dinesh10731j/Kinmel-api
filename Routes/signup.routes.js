import express from "express";
import Signup from "../Controller/signup.controller.js";
const SigupRoute = express.Router();


SigupRoute.post("/signup",Signup);


export default SigupRoute;
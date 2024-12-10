import express from "express"
import E_sewaIntregation from "../Controller/e_sewa.controller.js";

const e_sewaRoute = express.Router();


e_sewaRoute.post("/initiate-payment", E_sewaIntregation);


export default e_sewaRoute;




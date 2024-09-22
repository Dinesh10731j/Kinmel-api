import express from "express";
import Cancellation from "../Controller/cancellation.controller.js";

const cancellatinRoute = express.Router();

cancellatinRoute.post('/cancellation',Cancellation);

export default cancellatinRoute;
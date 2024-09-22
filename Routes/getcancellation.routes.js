import express from "express";
import getCancellation from "../Controller/getcancellation.controller.js";
const getCancellationRoute = express.Router();

getCancellationRoute.get("/cancellations/:userId",getCancellation);


export default getCancellationRoute;
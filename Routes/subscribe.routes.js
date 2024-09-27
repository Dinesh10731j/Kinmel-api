import express from "express";
import Subscribe from "../Controller/subscribe.controller.js";

const subscribeRoute = express.Router();

subscribeRoute.post("/subscribe", Subscribe);


export default subscribeRoute;

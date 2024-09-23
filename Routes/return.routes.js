import express from "express";
import Returns from "../Controller/return.controller.js";

const returnRoute = express.Router();

returnRoute.post("/return", Returns);

export default returnRoute;

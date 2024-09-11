import getUserDetails from "../Controller/userdetails.controller.js";
import express from "express";

const userDetailsRoute = express.Router();


userDetailsRoute.get("/userdetails/:userId",getUserDetails);


export default userDetailsRoute;
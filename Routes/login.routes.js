import express from "express";
import Login from "../Controller/login.controller.js";

const LoginRoute = express.Router();


LoginRoute.post("/login",Login);

export default LoginRoute;
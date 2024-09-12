import editProfile from "../Controller/editprofile.controller.js";
import express from "express";


const editProfileRoute = express.Router();


editProfileRoute.patch("/editprofile",editProfile);



export default editProfileRoute;
import editProfile from "../Controller/editprofile.controller.js";
import express from "express";
import verifyJwtToken from "../middleware/verifyToken.js";

const editProfileRoute = express.Router();


editProfileRoute.patch("/editprofile",verifyJwtToken,editProfile);



export default editProfileRoute;
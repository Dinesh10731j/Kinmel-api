import userContact from "../Controller/usercontact.controller.js";
import express from "express";


const userContactRoute = express.Router();


userContactRoute.post("/contact",userContact);


export default userContactRoute;
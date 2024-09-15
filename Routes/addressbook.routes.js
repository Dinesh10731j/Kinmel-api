import express from "express";
import addressBook from "../Controller/addressbook.controller.js";


const addressBookRoute = express.Router();

addressBookRoute.post("/addressbook",addressBook);


export default addressBookRoute;
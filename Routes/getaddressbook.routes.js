import express from "express";
import getAddressBook from "../Controller/getaddressbook.controller.js";

const getAddressRoute = express.Router();

getAddressRoute.get('/getaddressbook/:userId',getAddressBook);



export default getAddressRoute;
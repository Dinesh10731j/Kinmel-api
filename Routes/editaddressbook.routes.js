import editAddressBook from "../Controller/editaddressbook.js";
import express from "express";

const editAddressBookRoute = express.Router();

editAddressBookRoute.patch("/edit-adressbook", editAddressBook);

export default editAddressBookRoute;

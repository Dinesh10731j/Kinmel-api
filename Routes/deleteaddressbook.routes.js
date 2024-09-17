import express from "express";
import deleteAddressBook from "../Controller/deleteaddressbook.js";
const deleteAddressBookRoute = express.Router();

deleteAddressBookRoute.delete(
  "/address-book/:addressBookId",
  deleteAddressBook
);

export default deleteAddressBookRoute;

import deleteAddressBook from "../Controller/deleteaddressbook.js";

import express from "express";

const deleteAddressBookRoute = express.Router();

deleteAddressBookRoute.delete(
  "/address-book/:addressBookId",
  deleteAddressBook
);

export default deleteAddressBookRoute;

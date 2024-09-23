import express from "express";
import editReturn from "../Controller/editreturn.controller.js";

const editReturnRoute = express.Router();
editReturnRoute.patch('/edit-return',editReturn);

export default editReturnRoute;
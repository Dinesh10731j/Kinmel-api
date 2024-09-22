import express from "express";
import editCancellation from "../Controller/editcancellation.controller.js";

const editCancellationRoute = express.Router();

editCancellationRoute.patch("/edit-cancellation",editCancellation);


export default editCancellationRoute;
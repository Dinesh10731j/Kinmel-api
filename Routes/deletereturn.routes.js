import express from "express";
import deleteReturn from "../Controller/deletereturn.controller.js";

const deleteReturnRoute = express.Router();

deleteReturnRoute.delete("/delete-return/:returnId",deleteReturn);


export default deleteReturnRoute;
import express from "express";
import getReturn from "../Controller/getreturn.controller.js";

const getReturnRoute = express.Router();

getReturnRoute.get("user-returns/:userId", getReturn);

export default getReturnRoute;

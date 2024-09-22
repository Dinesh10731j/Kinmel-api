import express from "express";
import deleteCancellation from "../Controller/deletecancellation.controller.js";


const deleteCancellationRoute = express.Router();

deleteCancellationRoute.delete("/delete-cancellation/:cancellationId",deleteCancellation);


export default deleteCancellationRoute;



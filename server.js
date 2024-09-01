import express from "express";
import dotenv from "dotenv";
import SigupRoute from "./Routes/signup.routes.js";
import LoginRoute from "./Routes/login.routes.js";
import cors from "cors";
dotenv.config();
import ConnectdB from "./Db/db.conn.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",SigupRoute);
app.use("/api",LoginRoute);



ConnectdB().then(()=>{
    app.listen(process.env.PORT || 2010,()=>{
        console.log(`Listening to port ${process.env.PORT}:`);
    })
})

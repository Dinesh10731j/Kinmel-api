import express from "express";
import dotenv from "dotenv";
import SigupRoute from "./Routes/signup.routes.js";
import LoginRoute from "./Routes/login.routes.js";
import PaymentIntentRoute from "./Routes/paymentintent.routes.js";
import cors from "cors";
dotenv.config();
import ConnectdB from "./Db/db.conn.js";
import PaymentConfigRoute from "./Routes/paymentconfig.routes.js";
import userDetailsRoute from "./Routes/userdetails.routes.js";
import editProfileRoute from "./Routes/editprofile.routes.js";
import userContactRoute from "./Routes/usercontact.routes.js";
import addressBookRoute from "./Routes/addressbook.routes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",SigupRoute);
app.use("/api",LoginRoute);
app.use("/api",PaymentIntentRoute);
app.use("/api",PaymentConfigRoute);
app.use("/api",userDetailsRoute);
app.use("/api",editProfileRoute);
app.use("/api",userContactRoute);
app.use("/api",addressBookRoute);

ConnectdB().then(()=>{
    app.listen(process.env.PORT || 2010,()=>{
        console.log(`Listening to port ${process.env.PORT}:`);
    })
})

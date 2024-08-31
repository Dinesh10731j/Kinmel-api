import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/",(req,res)=>{
    res.json({msg:"Hello world"});
});


app.get("/home",()=>{
    res.json({msg:"Hello from home"});
})


app.listen(process.env.PORT || 2010,()=>{
    console.log(`Listening to port ${process.env.PORT}:`);
})
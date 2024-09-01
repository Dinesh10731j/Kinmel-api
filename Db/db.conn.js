import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectdB = async ()=>{
    try{
await mongoose.connect(process.env.MONGO_URL);
console.log('Databse Connected Successfully');
    }catch{
throw new Error("Failed to connect the database");
    }
}


export default ConnectdB;



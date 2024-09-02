import dotenv from "dotenv";
dotenv.config();
const PaymentConfig =  (req,res)=>{
    try{

        const PublishableKey = process.env.PUBLISHABLE_KEY;


        res.status(200).json({publishablekey:PublishableKey});

    }catch(err){

        res.status(500).json({msg:'Internal server error',error:err.message});
    }
}
export default PaymentConfig;
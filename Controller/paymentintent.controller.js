import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config()
const PaymentIntent = async (req,res)=>{
const stripe = new Stripe(process.env.SECRET_KEY,{
    apiVersion:'2024-06-20'
});
    //Payment Intent
    try{
        const PaymentIntent = await stripe.paymentIntents.create({
            currency:'usd',
            amount:1999,
            automatic_payment_methods:{
                enabled:true
            }


        });


        res.status(200).json({SecretKey:PaymentIntent.client_secret,success:true});

    }catch(err){
        res.status(500).json({msg:'Internal server error',success:false,error:err.message})
    }
}


export default PaymentIntent;
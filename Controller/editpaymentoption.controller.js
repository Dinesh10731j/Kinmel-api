import paymentOptionModel from "../Model/paymentoption.model.js";
const editPaymentOption = async (req,res) => {

    try{
const {paymentOptionId,name,details} = req.body;

const editedPaymentOption = await paymentOptionModel.findByIdAndUpdate(paymentOptionId,{name,details});

if(!editedPaymentOption || editedPaymentOption.length === 0){

    return res.status(404).json({msg:'Paymentoption not found',success:false})
}



res.status(200).json({msg:'Paymentoption edited successfully',success:true});


    }catch(err){
res.status(500).json({msg:"Internal server error",success:false,error:err.message})
    }
}


export default editPaymentOption;
import paymentOptionModel from "../Model/paymentoption.model.js";
const deletePaymentOption = async (req,res) => {
    try{


        const {paymentOptionId} = req.params;


        const deletedPaymentOption = await paymentOptionModel.findByIdAndDelete(paymentOptionId);
        if(!deletedPaymentOption){

            return res.status(404).json({msg:'Payment Option not found',success:false})
        }


        res.status(200).json({msg:'Payment option deleted successfully',success:true});
    }catch(err){

        res.status(500).json({msg:'Internal server error',success:false,error:err.message});

    }
}


export default deletePaymentOption;
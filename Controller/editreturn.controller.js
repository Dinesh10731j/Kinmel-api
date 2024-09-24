import returnModel from "../Model/return.model.js";
const editReturn = async (req,res)=> {
    try{

        const {comments,orderId,productName,reason,returnId} = req.body;

        const editedReturn = await returnModel.findByIdAndUpdate(returnId,{comments,orderId,productName,reason});

        if(!editedReturn){
            return res.status(400).json({msg:'Failed to edit return',success:false})
        }


        res.status(200).json({msg:'Return edited successfully',success:true});

    }catch(err){

        req.status(500).json({msg:'Internal server error',success:false,error:err.message});
    }
}


export default editReturn;





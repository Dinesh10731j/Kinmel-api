import returnModel from "../Model/return.model.js";
const deleteReturn = async (req,res)=>{
    try{

        const {returnId} = req.params;


        const deletedReturn = await returnModel.findByIdAndDelete(returnId);

        if(!deletedReturn){
            return res.status(400).json({msg:'Failed to delete return',success:false});
        }


        res.status(200).josn({msg:'Retuen deleted successfully',success:true});

    }catch(err){

        res.status(500).json({msg:'Internal server error',success:false,error:err.message});

    }
}


export default deleteReturn;
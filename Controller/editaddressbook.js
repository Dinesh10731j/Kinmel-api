import addressBookModel from "../Model/addressbook.model.js";
const editAddressBook = async (req,res) => {

    try{

        const {name,address,addressBookId} = req.body;

        const editedAddressBook = await addressBookModel.findByIdAndUpdate(addressBookId,{name,address});

        if(!editedAddressBook){
            return res.status(404).json({msg:"Addressbook not found",success:false});
            
        }


        res.status(200).json({msg:'Addressbook edited successfully',success:true});


    }catch(err){

        res.status(500).json({msg:'Internal server error',error:err.message,success:false})
    }
}


export default editAddressBook;
import addressBookModel from "../Model/addressbook.model.js";
const addressBook = async (req, res) => {
    try{
        const { name, address, userId } = req.body;

      const addressbook = await addressBookModel.create({name,address,userId});

      if(!addressbook){
        return res.status(400).josn({msg:'Failed to create address book entry ',success:false});
      }

res.status(201).json({msg:'address book created successfully',success:true});

    }catch(err){
        res.status(500).json({msg:'Internal server error',success:false,error:err.message});
    }

};


export default addressBook;

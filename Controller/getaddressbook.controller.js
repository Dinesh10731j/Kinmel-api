import addressBookModel from "../Model/addressbook.model.js";
const getAddressBook = async (req, res) => {
    const { userId } = req.params;
  try {
  

    const userAddressBook = await addressBookModel.findOne({ userId });

    if (!userAddressBook) {
      return res
        .status(404)
        .json({ msg: "User addressbook not found", success: false });
    }

    res
      .status(200)
      .json({ msg: "User addressbook fetch successfully", success: true,data:userAddressBook });
  } catch (err) {
    res
      .status(500)
      .json({
        msg: "Internal server error ",
        success: false,
        error: err.message,
      });
  }
};



export default getAddressBook;

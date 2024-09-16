import addressBookModel from "../Model/addressbook.model.js";
const getAddressBook = async (req, res) => {
  try {
    const { userId } = req.params;

    const userAddressBook = await addressBookModel.findById({ userId });

    if (!userAddressBook) {
      return res
        .status(400)
        .json({ msg: "User addressbook not found", success: false });
    }

    res
      .status(200)
      .json({ msg: "User addressbook fetch successfully", success: true });
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

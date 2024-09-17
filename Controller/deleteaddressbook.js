import addressBookModel from "../Model/addressbook.model.js";
const deleteAddressBook = async (req, res) => {
  const { addressBookId } = req.params;
  try {
    const deletedAddressBook = await addressBookModel.findByIdAndDelete({
      addressBookId,
    });

    if (!deletedAddressBook) {
      return res
        .status(404)
        .json({ msg: "User addressbook not found", success: false });
    }

    res.json({ msg: "User addressbook deleted successfully", success: true });
  } catch (err) {
    res
      .status(500)
      .json({
        msg: "Internal server error",
        success: false,
        error: err.message,
      });
  }
};


export default deleteAddressBook;

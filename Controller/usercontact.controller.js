import userContactModel from "../Model/usercontact.model.js";
const userContact = async (req, res) => {
  try {
    const { email, phone, message, name } = req.body;

    const alreadyExists = await userContactModel.findOne({ email });

    if (alreadyExists) {
      return res
        .status(409)
        .json({ msg: "User already exists", success: false });
    }

    const userContacts = await userContactModel.create({
      email,
      name,
      phone,
      message,
    });

    if (userContacts) {
      return res
        .status(200)
        .json({ msg: "User contact data send successfully ", success: true });
    }

    res
      .status(404)
      .json({ msg: "Failed to send user contact details", success: false });
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

export default userContact;

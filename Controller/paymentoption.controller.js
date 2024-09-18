import paymentOptionModel from "../Model/paymentoption.model.js";
const paymentOption = async (req, res) => {
  try {
    const { name, details, userId } = req.body;

    const paymentOption = await paymentOptionModel.create({
      name,
      details,
      userId,
    });

    if (!paymentOption) {
      return res
        .status(404)
        .json({ msg: "Payment option not found", success: false });
    }
  } catch (err) {
    res.status(500).json({ msg: "Internal server error", success: false,error:err.message });
  }
};

export default paymentOption;

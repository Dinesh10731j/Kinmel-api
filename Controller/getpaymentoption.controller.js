import paymentOptionModel from "../Model/paymentoption.model.js";
const getPaymentOption = async (req, res) => {
  try {
    const { userId } = req.body;
    const paymentOptions = await paymentOptionModel.find({ userId });

    if (!paymentOptions && paymentOptions?.length === 0) {
      return res
        .status(404)
        .json({ msg: "Payment option not found", success: false });
    }

    res
      .status(200)
      .json({ msg: "Payment option fetched successfully", success: true });
  } catch (err) {
    res
      .status(500)
      .json({
        msg: "Internal server error",
        success: false,
        error: err?.message,
      });
  }
};

export default getPaymentOption;

import returnModel from "../Model/return.model.js";
const Returns = async (req, res) => {
  try {
    const {
      comments,
      orderId,
      productName,
      reason,
      productImage,
      refundAmount,
      returnDate,
      returnStatus,
      userId,
    } = req.body;

    const returns = await returnModel.create({
      comments,
      orderId,
      productName,
      reason,
      productImage,
      refundAmount,
      returnDate,
      returnStatus,
      userId,
    });
    if (!returns) {
      return res.status(400).json({ msg: "Failed to create return" });
    }

    res.status(200).json({ msg: "Return created successfully" });
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


export default Returns;

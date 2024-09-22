import cancellationModel from "../Model/cancellation.model.js";
const Cancellation = async (req, res) => {
  try {
    const {
      cancellationDate,
      cancellationStatus,
      comments,
      orderId,
      productImage,
      productName,
      reason,
      refundAmount,
      userId,
    } = req.body;

    const cancellation = await cancellationModel.create({
      cancellationDate,
      cancellationStatus,
      comments,
      orderId,
      productImage,
      productName,
      reason,
      refundAmount,
      userId,
    });

    if (!cancellation) {
      return res
        .status(400)
        .json({ msg: "Failed to create cancellation", success: false });
    }

    res
      .status(201)
      .json({ msg: "Cancellation created successfully", success: true });
  } catch (err) {
    res.status({
      msg: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};


export default Cancellation;

import cancellationModel from "../Model/cancellation.model.js";
const getCancellation = async (req, res) => {
  try {
    const { userId } = req.params;

    const cancellations = await cancellationModel.find({ userId });

    if (cancellations.length === 0) {
      return res
        .status(404)
        .json({ msg: "User cancellation not found", success: false });
    }

    res
      .status(200)
      .json({ msg: "User Cancellation fetch successfully", success: true,data:cancellations });
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



export default getCancellation;

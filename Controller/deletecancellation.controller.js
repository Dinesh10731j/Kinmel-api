import cancellationModel from "../Model/cancellation.model.js";
const deleteCancellation = async (req, res) => {
  try {
    const { cancellationId } = req.params;

    const deletedCancellation = await cancellationModel.findByIdAndDelete(
      cancellationId
    );

    if (!deletedCancellation) {
      return res
        .status(400)
        .json({ msg: "Failed to delete cancellation", success: false });
    }

    res
      .status(200)
      .json({ msg: "Cancellation deleted succesfully", sucecss: true });
  } catch (err) {
    res
      .status(500)
      .json({
        msg: "Internal srver error",
        success: false,
        error: err.message,
      });
  }
};



export default deleteCancellation;

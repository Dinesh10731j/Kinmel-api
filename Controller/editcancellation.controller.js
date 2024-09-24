import cancellationModel from "../Model/cancellation.model.js";
const editCancellation = async (req, res) => {
  try {
    const {
      cancellationDate,
      cancellationStatus,
      cancellationId,
      comments,
      orderId,
      productImage,
      productName,
      reason,
      refundAmount,
    } = req.body;

    const editedCancellation = await cancellationModel.findByIdAndUpdate(
      cancellationId,
      {
        cancellationDate,
        cancellationStatus,
        comments,
        reason,
        orderId,
        productImage,
        productName,
        refundAmount,
      }
    );


if(!editedCancellation){

    return res.status(400).json({msg:'Failed to edit cancellation',success:false});
}


res.status(200).json({msg:'Cancellation edited successfully',success:false});

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


export default editCancellation;
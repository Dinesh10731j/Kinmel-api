import returnModel from "../Model/return.model.js";
const getReturn = async (req, res) => {
  try {
    const { userId } = req.params;

    const userReturns = await returnModel.find({ userId });

    if (userReturns.length === 0) {
      return res
        .status(404)
        .json({ msg: "User return not found", success: false });
    }

    res
      .status(200)
      .json({
        msg: "User return data fetch successfully",
        success: true,
        data: userReturns,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        msg: "Internal server error",
        error: err.message,
        success: false,
      });
  }
};


export default getReturn;

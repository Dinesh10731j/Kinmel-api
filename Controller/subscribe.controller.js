import subscribeModel from "../Model/subscribe.model.js";
const Subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const alreadyExists = await subscribeModel.findOne({ email });

    if (alreadyExists) {
      return res
        .status(409)
        .jon({ msg: "Subscriber already exists", success: true });
    }
    const subscribedUsers = await subscribeModel.create({ email });
    if (!subscribedUsers) {
      return res.status({ msg: "Failed to subscribe kinMel", success: false });
    }

    res.status(201).json({ msg: "Subscription successfull", success: true });
  } catch (err) {
    res.status(500).json({
      msg: "Internal server error",
      success: false,
      error: err.message,
    });
  }
};

export default Subscribe;

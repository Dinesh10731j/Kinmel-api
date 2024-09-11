import UserModel from "../Model/users.model.js";

const getUserDetails = async (req, res) => {
  try {
    const { userId } = req.params;

   
    const userInfo = await UserModel.findById(userId);

   
    if (!userInfo) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

  
    res.status(200).json({
      success: true,
      message: 'User details fetched successfully',
      data: userInfo,
    });
  } catch (error) {
 
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message, 
    });
  }
};

export default getUserDetails;

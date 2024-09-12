import bcrypt from "bcryptjs"
import UserModel from "../Model/users.model.js";

const editProfile = async (req, res) => {
  try {
    const { email, currentPassword, newPassword, confirmPassword, fullName } = req.body;

    // 1. Validate that email is provided
    if (!email) {
      return res.status(400).json({ msg: 'Email is required', success: false });
    }

    // 2. Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found', success: false });
    }

    // 3. If the user wants to change the password, check if currentPassword is correct
    if (newPassword || confirmPassword) {
      // Ensure current password is provided
      if (!currentPassword) {
        return res.status(400).json({ msg: 'Current password is required to change the password', success: false });
      }

      // Compare current password with hashed password in database
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Current password is incorrect', success: false });
      }

      // Check if new password and confirm password match
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ msg: 'New password and confirm password do not match', success: false });
      }

      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    // 4. Update the fullName if provided
    if (fullName) {
      user.fullName = fullName;
    }

    // 5. Save the updated user profile
    await user.save();

    // 6. Send success response
    res.status(200).json({ msg: 'Profile updated successfully', success: true });

  } catch (err) {
    res.status(500).json({ msg: 'Internal server error', success: false, error: err.message });
  }
};


export default editProfile;

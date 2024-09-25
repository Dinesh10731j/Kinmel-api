import { generateRandomPassword } from "../services/forgotpassword";
import { sendEmail } from "../services/forgotpassword";
import UserModel from "../Model/users.model.js";
import bcrypt from 'bcryptjs';

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(email);

        // Step 1: Find the user by email
        const user = await UserModel.findOne({ email }); // Adjust based on your user model
        if (!user) {
            return res.status(404).json({ msg: 'User not found', success: false });
        }

        let newPassword;
        let passwordMatch = true;

        // Step 2: Generate a new password and ensure it is not the same as the current password
        while (passwordMatch) {
            newPassword = generateRandomPassword();
            passwordMatch = await bcrypt.compare(newPassword, user.password); // Ensure the new password does not match the existing one
        }

        // Step 3: Hash the new password
        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        // Step 4: Update the user's password in the database
        user.password = newPasswordHash; // Replace the user's password hash
        await user.save(); // Save the updated user document

        // Step 5: Send the new password via email
        await sendEmail(email, 'Forgot Password', newPassword);

        // Step 6: Respond to the client
        res.status(200).json({ msg: 'New password sent to your email', success: true });
    } catch (err) {
        res.status(500).json({ msg: 'Internal server error', success: false, error: err.message });
    }
};

export default forgotPassword;

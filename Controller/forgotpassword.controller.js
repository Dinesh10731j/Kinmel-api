import { generateRandomPassword } from "../services/forgotpassword.js";
import { sendEmail } from "../services/forgotpassword.js";
import UserModel from "../Model/users.model.js";
import bcrypt from 'bcryptjs';

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
    

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: 'User not found', success: false });
        }

        let newPassword;
        let passwordMatch = true;

    
        while (passwordMatch) {
            newPassword = generateRandomPassword();
            passwordMatch = await bcrypt.compare(newPassword, user.password); 
        }

      
        const newPasswordHash = await bcrypt.hash(newPassword, 10);

       
        user.password = newPasswordHash; 
        await user.save(); 

       
         sendEmail(email, 'Forgot Password', newPassword);

       
        res.status(200).json({ msg: 'New password sent to your email', success: true });
    } catch (err) {
        res.status(500).json({ msg: 'Internal server error', success: false, error: err.message });
    }
};

export default forgotPassword;

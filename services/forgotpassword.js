import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export const generateRandomPassword =  (length = 8) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};



const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.GMAIL_PASS,
    },
});


export const sendEmail =  (to,subject,newPassword)=>{
const text = `Your new password is ${newPassword}`
    const mailOptions = {
        from:process.env.GMAIL_USER,
        to:to,
        subject:subject,
        text:text,
        
    };

    transporter.sendMail(mailOptions,(error,info)=>{
if(error){
    console.log('Error sending email:',error.message);
}else{
    console.log('Email sent:',info.response);
}
    })


}




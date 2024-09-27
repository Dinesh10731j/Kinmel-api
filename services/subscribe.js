import nodemailer from "nodemailer";
import dotenv from 'dotenv';

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.GMAIL_PASS,
    }
});



export const sendSubscriptionMessage = (to,subject)=>{
    const text = 'Thank you for subscribing KinMel';

    const mailOptions = {
        to :to,
        subject:subject,
        text:text,

    };
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log('Error while sending email',err.message);
        }else{
            console.log('Email send successfully',info.messageId);
        }
    })

    

}



export default sendSubscriptionMessage();
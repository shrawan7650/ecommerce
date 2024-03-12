require('dotenv').config();
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const nodemailer = require('nodemailer');
exports.hashPassword = async (password) => {
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword;
  } catch (err) {
    console.log(err);
  }
};

exports.comaprePassword = async (password, hashPassword) => {
  const comapre = bcrypt.compare(password, hashPassword);
  return comapre;
};

exports.genrateToken = async({id},secret) =>{
  const token = JWT.sign({id},secret);
  return token;
}


//mail sender  function

exports.mailSend = async ({ email, otp }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'Reset Password',
      text: `Your OTP for password reset is: ${otp}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to handle it in the calling function if needed
  }
};




// email valid check



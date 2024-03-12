const {
  hashPassword,
  comaprePassword,
  genrateToken,
  mailSend,
} = require("../helpers/authHelper.js");
const User = require("../models/userModel.js");
const Otp = require("../models/otpModel.js");

exports.registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, role} = req.body;
    // validation
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).send({ msg: "Please fill all fields" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({
        msg: "Invalid email address",
      });
    }

    // const passwordRegex =
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    // if (!passwordRegex.test(password)) {
    //   return res.status(400).send({
    //     msg: "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol (!@#$%^&*)",
    //   });
    // }
    // check user
    const userExist = await User.findOne({ email });
    // existing user
    if (userExist) {
      return res.status(400).send({
        success: false,
        msg: "User already exists",
      });
    }

    // hashing password
    const hashedPassword = await hashPassword(password);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      role
   
    });

    await user.save();

    user.password = undefined;
    res.status(201).send({
      msg: "User created successfully",
      data: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      msg: "Error in registration",
      err: err.message,
    });
  }
};

// login controller

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        msg: "Please provide an email and a password",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({
        msg: "Invalid email address",
      });
    }

    // const passwordRegex =
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    // if (!passwordRegex.test(password)) {
    //   return res.status(400).send({
    //     msg: "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol (!@#$%^&*)",
    //   });
    // }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(403).json({ msg: "Invalid Email or Password" });
    }

    const match = await comaprePassword(password, user.password);
    if (!match) {
      return res.status(400).send({
        msg: "Invalid Password",
      });
    }
    user.password = undefined;
    // create token
    const token = genrateToken({ id: user._id }, process.env.JWT_SECRET).then(
      (data) => {
        res.status(200).send({
          success: true,
          user: user,
          token: data,
          msg: "Login Successfully",
        });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send({
      msg: "Error in login",
      err: err.message,
    });
  }
};

// email send
exports.emailSend = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({
        msg: "Invalid email address",
      });
    }

    if (!user) {
      return res.status(404).send({
        success: false,
        msg: "Email does not exist",
      });
    } else {
      let otpCode = Math.floor(Math.random() * 10000 + 1);
      if (otpCode >= 4) {
        otpCode = await Otp.create({
          email: email,
          code: otpCode,
          expireIn: new Date().getTime() + 300 * 1000,
        });
      }

  

      res.status(200).send({
        msg: "Email has been sent",
        data: otpCode,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: err.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // Find OTP for the user's email
    const otpData = await Otp.findOne({ email });

    if (!otpData) {
      return res.status(400).json({ msg: "OTP not found or expired" });
    }

    // Check if OTP matches
    if (otpData.code !== otp) {
      return res.status(400).json({ msg: "Invalid OTP" });
    }

    // const passwordRegex =
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    // if (!passwordRegex.test(newPassword)) {
    //   return res.status(400).send({
    //     msg: "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol (!@#$%^&*)",
    //   });
    // }

    // Hash new password
    const hashedPassword = await hashPassword(newPassword);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    // Clear OTP after reset
    await Otp.deleteOne({ email });

    res.status(200).json({ msg: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

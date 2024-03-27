const User = require("../Models/userModel");
const { createSecretToken } = require("../util/SecretToken");
const Therapist = require("../Models/therapistModel");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      age,
      gender,
      phoneNumber,
      location,
      role,
      createdAt,
    } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      age,
      gender,
      phoneNumber,
      location,
      role,
      createdAt,
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", succes: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.json({ message: "Incorrect email or password" });
    }
    const auth = await bcrypt.compare(password, existingUser.password);
    if (!auth) {
      return res.json({ message: "Incorrect email or password" });
    }
    const token = createSecretToken(existingUser._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      role: existingUser.role,
    });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.SignupTherapist = async (req, res, next) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      age,
      gender,
      phoneNumber,
      location,
      role,
      licenseeImage,
    } = req.body;
    console.log(req.body);
    const existingTherapist = await Therapist.findOne({ email });
    if (existingTherapist) {
      return res.json({ message: "Therapist already exists" });
    }
    const therapist = await Therapist.create({
      email,
      password,
      firstName,
      lastName,
      age,
      gender,
      phoneNumber,
      location,
      role,
      licenseeImage,
    });
    const token = createSecretToken(therapist._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({
      message: "Therapist Registered in successfully",
      succes: true,
      therapist,
    });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.LoginTherapist = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const existingTherapist = await Therapist.findOne({ email });
    if (!existingTherapist) {
      return res.json({ message: "Incorrect email or password" });
    }
    const auth = await bcrypt.compare(password, existingTherapist.password);
    if (!auth) {
      return res.json({ message: "Incorrect email or password" });
    }
    const token = createSecretToken(existingTherapist._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      role: existingTherapist.role,
      cookie: cookie
    });
    next();
  } catch (error) {
    console.error(error);
  }
};

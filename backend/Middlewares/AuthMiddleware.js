require('dotenv').config({path: '../.env'});
const User = require("../Models/userModel");
const Therapist = require("../Models/therapistModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user)
        return res.json({ status: true, user: user.email, role: user.role });
      else return res.json({ status: false });
    }
  });
};

module.exports.therapistVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const therapist = await Therapist.findById(data.id);
      if (therapist)
        return res.json({
          status: true,
          therapist: therapist.email,
          role: therapist.role,
          user: therapist.firstName,

          cookies: token
        });
      else return res.json({ status: false });
    }
  });
};

const userDetails = require("../Models/userModel");

module.exports.getUsers = async (req, res) => {
  try {
    const getUsers = await userDetails.find();
    res.status(201).json({ getUsers });
  } catch (err) {
    console.log(err);
  }
};

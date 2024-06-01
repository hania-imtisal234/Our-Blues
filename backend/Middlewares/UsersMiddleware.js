const userDetails = require("../Models/userModel");

module.exports.getUsers = async (req, res) => {
  try {
    const getUsers = await userDetails.find({});
    res.status(201).json({ getUsers });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ message: "Email parameter is required" });
    }
    const user = await userDetails.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

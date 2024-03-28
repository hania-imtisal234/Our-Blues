const { default: mongoose } = require("mongoose");
const Therapist = require("../Models/therapistModel")
const User = require("../Models/userModel")

const bcrypt = require("bcrypt")

module.exports.updateDetails = async (req, res) => {
    try {
        const {_id, email, firstName, lastName, age, gender, phoneNumber} = req.body;
        const updatedUser = await Therapist.findOneAndUpdate(
            {_id: new mongoose.Types.ObjectId(_id)},
            {
            $set: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                age: age,
                gender: gender,
                phoneNumber: phoneNumber,
                }
            },
            {new: true}
        );
        res
            .status(201)
            .json({message: "User Details Updated successfully", succes: true, updatedUser})
    } catch(err) {
        console.error(err);
    }
}

module.exports.updateUserDetails = async (req, res) => {
    try {
        const {_id, email, firstName, lastName, age, gender, phoneNumber, location} = req.body;
        const updatedUser = await User.findOneAndUpdate(
            {_id: new mongoose.Types.ObjectId(_id)},
            {
            $set: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                age: age,
                gender: gender,
                phoneNumber: phoneNumber,
                location: location,
                }
            },
            {new: true}
        );
        res
            .status(201)
            .json({message: "User Details Updated successfully", succes: true, updatedUser})
    } catch(err) {
        console.error(err);
    }
}

module.exports.changePassword = async (req, res) => {
    try {
        const {_id, password} = req.body;
        const newPassword = await bcrypt.hash(password, 12);
        const updatedPassword = await User.findOneAndUpdate(
            {_id: new mongoose.Types.ObjectId(_id)},
            {
             $set: {
                password: newPassword,
             }   
            },
            {new: true}
        );
        res
            .status(201)
            .json({message: "Password Updated Successfully", status: true, updatedPassword})
    } catch(err) {
        console.log(err)
    }
}
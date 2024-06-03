const Therapist = require("../Models/therapistModel");

module.exports.UpdateRatings = async (req, res) => {
  try {
    const therapistId = req.params.id;
    const { rating } = req.body;

    if (typeof rating !== "number" || rating < 0 || rating > 5) {
      return res.status(400).json({ error: "Invalid rating value" });
    }
    const therapist = await Therapist.findById(therapistId);
    if (!therapist) {
      return res.status(404).json({ error: "Therapist not found" });
    }
    therapist.totalRatingCount += 1;
    therapist.totalRatingSum += rating;
    const newRating = therapist.totalRatingSum / therapist.totalRatingCount;
    therapist.ratings = newRating;
    await therapist.save();

    res.json({ message: "Rating submitted successfully", newRating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.getReviews = async (req, res) => {
  try {
    const therapist = await Therapist.findById(req.params.id);
    if (!therapist) {
      return res.status(404).json({ error: "Therapist not found" });
    }
    res.json({ reviews: therapist.reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.addReviews = async (req, res) => {
  try {
    const { review } = req.body;
    const therapist = await Therapist.findById(req.params.id);
    if (!therapist) {
      return res.status(404).json({ error: "Therapist not found" });
    }
    therapist.reviews.push(review);
    await therapist.save();
    res.json({ message: "Review added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.saveTherapistTimings = async (req, res) => {
  try {
    const { startTime, endTime, date, fees } = req.body;
    const therapistEmail = req.params.email;
    console.log(therapistEmail);
    const therapist = await Therapist.findOne({ email: therapistEmail });
    if (!therapist) {
      return res.status(404).json({ error: "Therapist not found" });
    }

    therapist.therapistTimings.push({ startTime, endTime, date, fees });

    await therapist.save();
    console.log("saved");
    res.status(201).json({
      message: "Time, Date & fees saved successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to save Time, date & fees" });
  }
};

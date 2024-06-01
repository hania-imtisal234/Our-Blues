import React, { useState, useEffect } from "react";
import { Rate, message, List, Form, Avatar, Button } from "antd";
import axios from "axios";
import FormButton from "../../Shared/FormButton/FormButton";
import { UserOutlined } from "@ant-design/icons";
import FormInput from "../../Shared/FormInput/FormInput";
import { FormRule } from "../../../constants/formRules";

const ViewRatings = ({ therapistInfo }) => {
  const [rating, setRating] = useState(therapistInfo.ratings);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [numDisplayed, setNumDisplayed] = useState(3);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/getReviews/${therapistInfo._id}`,
        { withCredentials: true }
      );
      setReviews(response.data.reviews);
    } catch (error) {
      console.error("Failed to fetch reviews", error);
    }
  };

  useEffect(() => {
    setDisplayedReviews(reviews.slice(0, numDisplayed));
  }, [reviews, numDisplayed]);

  const handleRatingChange = async (value) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `http://localhost:4000/rateTherapist/${therapistInfo._id}`,
        { rating: value },
        { withCredentials: true }
      );

      setRating(response.data.newRating);
      message.success("Rating submitted successfully");
    } catch (error) {
      console.error(error);
      message.error("Failed to submit rating");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReviewSubmit = async () => {
    if (!reviewText) {
      message.warning("Please enter a review before submitting");
      return;
    }

    try {
      await axios.post(
        `http://localhost:4000/addReview/${therapistInfo._id}`,
        { review: reviewText },
        { withCredentials: true }
      );
      fetchReviews();
      setReviewText("");
      message.success("Review submitted successfully");
    } catch (error) {
      console.error("Failed to submit review", error);
      message.error("Failed to submit review");
    }
  };

  const handleLoadMore = () => {
    setNumDisplayed(numDisplayed + 3);
  };

  return (
    <div className="bg-gradient-to-r from-yale-blue to-carolina-blue p-6 rounded-lg shadow-lg text-white mb-4 ml-5">
      <h2 className="text-2xl font-bold mb-4">Rate the therapist?</h2>
      {therapistInfo ? (
        <div className="mb-4">
          <label className="block mb-2">Ratings:</label>
          <div className="flex items-center mb-4">
            <Rate
              value={rating}
              onChange={handleRatingChange}
              disabled={isSubmitting}
            />
          </div>
          <h1 className="text-xl font-bold mb-2">Give Review?</h1>
          <Form onFinish={handleReviewSubmit}>
            <FormInput
              name="review"
              type="text"
              classNames="h-10"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rules={FormRule.REVIEW}
              size="middle"
              placeholder="Enter Review"
            />

            <FormButton
              label="Submit Review"
              className="xs:w-44 sm:w-56 text-white bg-yale-blue w-56 h-24 mt-4"
              loading={isSubmitting}
            />
          </Form>
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Reviews:</h3>
            <List
              dataSource={displayedReviews}
              renderItem={(item) => (
                <List.Item
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    description={<span style={{ color: "#fff" }}>{item}</span>}
                  />
                </List.Item>
              )}
            />
            {reviews.length > numDisplayed && (
              <Button onClick={handleLoadMore} className="text-white">
                Load More
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="mb-4">No therapist selected</div>
      )}
    </div>
  );
};

export default ViewRatings;

import React from "react";
import { Rate } from "antd";

const ViewRatings = ({ therapistInfo }) => {
  const {
    id,
    name,
    title,
    qualification,
    rating,
    review,
    availability,
    experience,
    profile,
  } = therapistInfo;

  return (
    <div className="bg-gradient-to-r from-yale-blue to-carolina-blue p-4 sm:p-8 rounded-lg shadow-lg text-white mb-4 sm:mb-20 mr-0 sm:mr-10 ml-5">
      <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-left">
        View Rating or Review
      </h2>
      {therapistInfo ? (
        <div className="mb-2 sm:mb-4">
          <label className="block mb-1 sm:mb-2">Ratings:</label>
          <div>
            {therapistInfo.name} - Rating:{" "}
            <Rate defaultValue={therapistInfo.rating} />
          </div>
        </div>
      ) : (
        <div className="mb-2 sm:mb-4">No therapist selected</div>
      )}
      <div>
        <strong className="block mb-1 sm:mb-2">Review:</strong>
        <p className="mb-0">
          {therapistInfo ? therapistInfo.review : "No therapist selected"}
        </p>
      </div>
    </div>
  );
};

export default ViewRatings;

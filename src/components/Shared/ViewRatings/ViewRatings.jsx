import React from "react";
import { Rate } from "antd";

const ViewRatings = ({ therapists, selectedTherapist }) => {
  const therapist = therapists.find((t) => t.id === selectedTherapist);

  return (
    <div className="bg-gradient-to-r from-yale-blue to-carolina-blue p-8 rounded-lg shadow-lg text-white w-96 mb-20 mr-10">
      <h1 className="text-3xl font-bold mb-4 text-left">View Rating or Review</h1>
      {therapist ? (
        <div className="mb-4">
          <label className="block mb-2">Select Therapist:</label>
          <div>
            {therapist.name} - Rating: <Rate defaultValue={therapist.rating} />
          </div>
        </div>
      ) : (
        <div>No therapist selected</div>
      )}
      <div className="mt-4">
        <strong>Review:</strong>
        <p>{therapist ? therapist.review : "No therapist selected"}</p>
      </div>
    </div>
  );
};

export default ViewRatings;

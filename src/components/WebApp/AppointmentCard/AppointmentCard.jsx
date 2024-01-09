import { DatePicker } from "antd";
import React, { useState } from "react";
import { ReadOutlined } from "@ant-design/icons";
import FormButton from "../../Shared/FormButton/FormButton";
import { loadStripe } from "@stripe/stripe-js";
import { Payments } from "../../../enums";

const AppointmentCard = ({ therapistInfo }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const THERAPIST_REQUIRED = "Therapist is required"; // Assuming this constant is defined

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookAppointment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OWNFwSGbQwiiPfQU0irBiHJ1vuiSeCbom1cm6R2AxgZCc0GHZ0uMHP2aRyXbJwjp04s1Pathfv4EbcMGk6eTlAR00NyZmIYNc"
    );

    const body = {
      Payments: { Payments },
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:4000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ data: [Payments] }),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  const getAvailableDays = () =>
    therapistInfo ? therapistInfo.availability || [] : [];

  const disabledDate = (current) =>
    !getAvailableDays().includes(current.format("dddd"));

  const pickerClassName = isDatePickerOpen ? "small-datepicker" : "";

  return (
    <div className="m-2 mt-10 ">
      <div className="w-4/5 bg-gradient-to-r from-yale-blue to-carolina-blue p-4 rounded-lg shadow-lg text-white mx-4 ">
        <h1 className="md:text-2xl xs:text-sm font-bold mb-4 sm:mb-8 text-left md:mx-4">
          Book Appointment
        </h1>
        <div className="flex-cols mb-2 sm:mb-1 md:mx-4">
          <label className="block mb-2">Select Date and Time:</label>
          <DatePicker
            showTime
            placeholder="Select date and time"
            onChange={handleDateChange}
            className={`w-full sm:w-auto ${pickerClassName}`}
            disabledDate={disabledDate}
            open={isDatePickerOpen}
            onOpenChange={(open) => setDatePickerOpen(open)}
          />
        </div>
        <FormButton
          label={"Book Appointment"}
          type="primary"
          icon={<ReadOutlined />}
          contentFontSize={{
            xs: 5,
            sm: 12,
          }}
          onClick={handleBookAppointment}
          className="xs:w-6/7 md:mx-4 mt-4"
        />
      </div>
    </div>
  );
};

export default AppointmentCard;

import { DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import { ReadOutlined } from "@ant-design/icons";
import FormButton from "../../Shared/FormButton/FormButton";
import { loadStripe } from "@stripe/stripe-js";
import { Payments, Therapists, STRIPE_API } from "../../../enums";
import axios from "axios";
import { Roles } from "../../../enums";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { THERAPISTDETAILS } from "../../../constants/Routes";
import LoadingButton from "../../Shared/LoadingButton/LoadingButton";

const AppointmentCard = ({ therapistInfo }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [therapistList, setTherapistList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const loggedInUserEmail = JSON.parse(
    localStorage.getItem("userInfo")
  ).userEmail;

  const { id } = useParams();
  const selectedTherapistId = parseInt(id);

  const selectedTherapist = Therapists.find(
    (therapist) => therapist.id === selectedTherapistId
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getUsers", {
          withCredentials: true,
        });

        const users = response.data.getUsers;
        const therapistDetails = users.filter(
          (user) => user.role === Roles.therapist
        );
        const userDetails = users.filter((user) => user.role === Roles.user);

        setTherapistList(therapistDetails);
        setUsersList(userDetails);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const findLoggedInUser = () => {
    for (let i = 0; i < usersList.length; i++) {
      if (usersList[i].email === loggedInUserEmail) {
        return usersList[i];
      }
    }
    return null;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookAppointment = async () => {
    try {
      const loggedInUser = findLoggedInUser();
      if (!loggedInUser) {
        throw new Error("Logged in user not found.");
      }

      const appointmentData = {
        therapistID: therapistInfo.id,
        userEmail: loggedInUser.email,
        therapistEmail: selectedTherapist.email,
        date: selectedDate.format("YYYY-MM-DD"),
        time: selectedDate.format("HH:mm"),
        meetlink: "",
      };

      const appointmentResponse = await axios.post(
        "http://localhost:4000/bookAppointment",
        appointmentData,
        { withCredentials: true }
      );
      const { success, message } = appointmentResponse.data;
      if (!success) {
        throw new Error(`Error with booking appointment: ${message}`);
      }

      toast.success("Appointment booked successfully");
      setAppointmentBooked(true);
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Error booking appointment");
    }
  };

  const handleProceedToPayment = async () => {
    try {
      // Initialize Stripe and create checkout session
      const returnUrl = window.location.href;
      const stripe = await loadStripe(STRIPE_API);
      const response = await axios.post(
        "http://localhost:4000/api/create-checkout-session",
        { data: [Payments], returnUrl },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Stripe checkout session created:", response.data);

      const session = response.data;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(`Error with Payment method: ${result.error.message}`);
      }
    } catch (error) {
      console.error("Error proceeding to payment:", error);
      toast.error("Error proceeding to payment");
      return; // Exit the function if an error occurs
    }

    // If no error occurred, show success toast
    toast.success("Payment Proceeded successfully");
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
        {!appointmentBooked && (
          <FormButton
            label={"Book Appointment"}
            type="primary"
            icon={<ReadOutlined />}
            onClick={handleBookAppointment}
            className="xs:w-6/7 md:mx-4 mt-4"
          />
        )}
        {appointmentBooked && (
          <FormButton
            label={"Proceed to Payment"}
            type="primary"
            icon={<ReadOutlined />}
            onClick={handleProceedToPayment}
            className="xs:w-6/7 md:mx-4 mt-4"
          />
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;

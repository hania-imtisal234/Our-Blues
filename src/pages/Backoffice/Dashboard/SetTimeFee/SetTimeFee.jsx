import React, { useState, useEffect } from "react";
import { Form, TimePicker, DatePicker } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../../../../components/Shared/FormInput/FormInput";
import { FormRule } from "../../../../constants/formRules";
import FormButton from "../../../../components/Shared/FormButton/FormButton";

const SetTimeFee = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [date, setDate] = useState(null);
  const [fees, setFees] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentTherapist, setCurrentTherapist] = useState("");
  useEffect(() => {
    const storedTherapist = localStorage.getItem("userInfo");
    if (storedTherapist) {
      const { email } = JSON.parse(storedTherapist);
      setCurrentTherapist(email);
    }
  }, []);
  const onChangeTime = (time, timeString) => {
    setStartTime(timeString[0]);
    setEndTime(timeString[1]);
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-center",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-center",
    });

  const onChangeDate = (date) => {
    setDate(date.format("YYYY-MM-DD"));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // const storedTherapist = localStorage.getItem("userInfo");
      // if (storedTherapist) {
      //   const { email } = JSON.parse(storedTherapist);
      //   setCurrentTherapist(email);
      // }
      const data = {
        startTime: startTime,
        endTime: endTime,
        date: date,
        fees: fees,
      };

      const response = await axios.post(
        `http://localhost:4000/setTimeFee/${currentTherapist}`,
        data,
        {
          withCredentials: true,
        }
      );
      const { success, message } = response.data;
      if (success) {
        handleSuccess(message);
      } else {
        handleError(message);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      throw new Error(error);
    }
  };

  return (
    <div className="flex-cols h-screen">
      <div className="flex justify-center">
        <h1 className="text-yale-blue font-bold py-10 xs:text-2xl md:text-3xl">
          Set Time & Fee for Appointment
        </h1>
      </div>
      <div className="flex justify-center space-x-8">
        <h1 className="text-yale-blue font-bold">Time:</h1>
        <TimePicker.RangePicker onChange={onChangeTime} />
        <h1 className="text-yale-blue font-bold">Date:</h1>
        <DatePicker onChange={onChangeDate} />
      </div>
      <Form
        name="basic"
        layout="vertical"
        className="flex flex-col items-center"
        onFinish={handleSubmit}
      >
        <div className="flex justify-center py-5">
          <FormInput
            name="fees"
            type="text"
            label="Enter Fees"
            rules={FormRule.FEES}
            size="large"
            placeholder="Enter your amount"
            onChange={(e) => setFees(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <FormButton
            label="Submit"
            onClick={handleSubmit}
            className="xs:w-44 sm:w-56 text-white bg-yale-blue w-56 h-24 "
          />
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default SetTimeFee;

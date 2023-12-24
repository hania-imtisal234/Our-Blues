import React, { useState } from "react";
import { Layout, Select, DatePicker, Button, message, Rate } from "antd";
import AppHeader from "../../../components/Shared/AppHeader/AppHeader.jsx";
import { ReadOutlined } from "@ant-design/icons";
import ViewRatings from "../../../components/Shared/ViewRatings/ViewRatings.jsx";

const { Content } = Layout;
const { Option } = Select;

const BookMeeting = () => {
  const [therapists, setTherapists] = useState([
    { id: 1, name: "Therapist 1", rating: 4.5, review: "Great Therapist" },
    { id: 2, name: "Therapist 2", rating: 3.8 , review: "1- Had a really good experience, defintely helpful."},
    { id: 3, name: "Therapist 3", rating: 5.0, review: "Definitely suggest it" },
  ]);

  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleTherapistChange = (value) => {
    setSelectedTherapist(value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookAppointment = () => {
    if (!selectedTherapist || !selectedDate) {
      message.error("Please select a therapist and date");
      return;
    }
    message.success("Appointment booked successfully!");
  };

  return (
    <Layout className="mainLayout bg-white">
      <AppHeader />
      <Content className="flex justify-between items-center h-screen p-12">
        <div className="bg-gradient-to-r from-yale-blue to-carolina-blue p-12 rounded-lg shadow-lg text-white w-96 mb-20 ml-10">
          <h1 className="text-3xl font-bold mb-8 text-left">Book Appointment</h1>
          <div className="mb-4">
            <label className="block mb-2">Select Therapist:</label>
            <Select
              placeholder="Select therapist"
              onChange={handleTherapistChange}
              className="w-full"
              dropdownStyle={{ backgroundColor: "white" }}
            >
              {therapists.map((therapist) => (
                <Option key={therapist.id} value={therapist.id}>
                  {therapist.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Select Date and Time:</label>
            <DatePicker
              showTime
              placeholder="Select date and time"
              onChange={handleDateChange}
              className="w-full"
            />
          </div>
          <Button
            type="primary"
            icon={<ReadOutlined />}
            onClick={handleBookAppointment}
            className="w-full mb-4"
          >
            Book Appointment
          </Button>
        </div>
        <ViewRatings therapists={therapists} selectedTherapist={selectedTherapist} />
      </Content>
    </Layout>
  );
};

export default BookMeeting;

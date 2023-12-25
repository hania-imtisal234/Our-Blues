import React, { useState } from "react";
import { Layout, Select, DatePicker, Button, message, Rate } from "antd";
import WebHeader from "../../../components/Shared/WebHeader/WebHeader.jsx";
import { ReadOutlined } from "@ant-design/icons";
import ViewRatings from "../../../components/Shared/ViewRatings/ViewRatings.jsx";
import { THERAPIIST_REQUIRED, } from "../../../constants/messages.js"


const { Content } = Layout;
const { Option } = Select;

const BookMeeting = () => {
  const [therapists] = useState([
    { id: 1, name: "Therapist 1", rating: 4.5, review: "Great Therapist", availability: ["Monday", "Wednesday", "Friday"] },
    { id: 2, name: "Therapist 2", rating: 3.8 , review: "1- Had a really good experience, defintely helpful.", availability: ["Tuesday", "Thursday"]},
    { id: 3, name: "Therapist 3", rating: 5.0, review: "Definitely suggest it", availability: ["Monday", "Thursday", "Saturday"] },
  ]);

  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  

  const handleTherapistChange = (value) => {setSelectedTherapist(value); };
  const handleDateChange = (date) => {setSelectedDate(date); };
  
const handleBookAppointment = () => !selectedTherapist || !selectedDate ? message.error(THERAPIIST_REQUIRED) : message.success("Appointment booked successfully!");
const getAvailableDays = () => selectedTherapist ? therapists.find((t) => t.id === selectedTherapist)?.availability || [] : [];
const disabledDate = (current) => !getAvailableDays().includes(current.format("dddd"));
const pickerClassName = isDatePickerOpen ? 'small-datepicker' : '';


  return (
    <Layout className="mainLayout bg-white">
      <WebHeader />
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
          <div className="mb-1">
        <label className="block mb-2">Select Date and Time:</label>
        <DatePicker 
          showTime
          placeholder="Select date and time"
          onChange={handleDateChange}
          className="w-full"
          disabledDate={disabledDate}
          open={isDatePickerOpen}
          onOpenChange={(open) => setDatePickerOpen(open)}
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

import React, { useState } from "react";
import { Layout, Button, Input } from "antd";
import AppHeader from "../../../components/Shared/AppHeader/AppHeader.jsx";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter.jsx";
import { ReadOutlined, QuestionCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";

const Home = () => {
  const [city, setCity] = useState("");
  const [therapistName, setTherapistName] = useState("");

  const handleBooking = () => {
    console.log(`therapis ${city} for therapist: ${therapistName}`);
  };

  return (
    <Layout className="mainLayout bg-white">
      <AppHeader />
      <div className="text-center p-20 z-1 bg-white">
  <h1 className="text-5xl font-bold font-sans mb-1">
    <span className="text-shadow-lg text-yale-blue">Our Blues</span></h1>
        <p className="font-sans text-bold text-lg text-carolina-blue">
          Within Our-Blues, we illuminate the path to mental wellness, offering a safe harbor for self-discovery, healing, and the empowering embrace of your unique journey towards inner balance. Our platform is designed to offer expert guidance from certified therapists, fostering a holistic approach that addresses the emotional, mental, and physical dimensions of well-being. Join us on this transformative journey, where Our-Blues becomes a beacon of support, understanding, and empowerment for all.
        </p>
      </div>
      <div className="container bg-yale-blue p-10  text-center text-white rounded-10 relative z-1 ">
        <h2 className="text-2xl font-bold mb-1 font-sans text-white">
          Find and Book Your Therapist Now
        </h2>
        <div className="booking-form md:ml-0 ml-10">
          <Input
            placeholder="Enter your city"
            value={city}
            onChange={(cityInput) => setCity(cityInput.target.value)}
            className="ant-input bg-white text-yale-blue"
          />
          <Input
            placeholder="Enter therapist's name"
            value={therapistName}
            onChange={(therapistInput) => setTherapistName(therapistInput.target.value)}
            className="ant-input bg-white text-yale-blue mt-3"
          />
          <Button type="primary" size="large" onClick={handleBooking} className="bg-carolina-blue text-white mt-5">
            Book Therapist
          </Button>
        </div>
      </div>

      <div className="container bg-white bg-gradient-to-r from-yale-blue to-carolina-blue text-left text-white rounded-10 relative z-1 mt-20 shadow-lg ">
  <h2 className="text-2xl font-bold mb-4 font-sans text-center mt-10">
    Looking for more?
  </h2>
  <div className="flex items-center justify-around mb-10 text-font-sans">
    <Button type="link" className="text-white text-lg " icon={<ReadOutlined />}>
      Read Mental Health Articles
    </Button>
    <Button type="link" className="text-white text-lg" icon={<QuestionCircleOutlined />}>
      Ask a Question
    </Button>
    <Button type="link" className="text-white text-lg" icon={<InfoCircleOutlined />}>
      About Us
    </Button>
  </div>
</div>

      <Layout style={{ marginTop: "100vh" }}>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default Home;

import React, { useState } from "react";
import { Layout, Button, Input } from "antd";
import AppHeader from "../../../components/Shared/AppHeader/AppHeader.jsx";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter.jsx";
import Icon from "../../../assets/Icon.png";
import { ReadOutlined, QuestionCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";

const Home = () => {
  const [city, setCity] = useState("");
  const [therapistName, setTherapistName] = useState("");
  const handleBooking = () => {
    console.log(`therapis book page ${city} for therapist name: ${therapistName}`);
  };

  return (
    <Layout className="mainLayout bg-sea-salt">
      <AppHeader />
      <div style={{ textAlign: "center", padding: "20px", zIndex: 1 }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", fontFamily: "'Helvetica Neue', sans-serif", marginBottom: "0.5rem",
          textShadow: "3px 3px 5px #003366, 5px 5px 7px #56A0D3", color: "#003366"}}>
          Our-Blues
        </h1>
        <p style={{ fontFamily: "'Helvetica Neue'", color: "#003366", fontSize: "1rem" , fontWeight: "bold"}}>
          Within Our-Blues, we illuminate the path to mental wellness, offering a safe harbor for self-discovery, healing, and the empowering embrace of your unique journey towards inner balance.
          Our platform is designed to offer expert guidance from certified therapists, fostering a holistic approach that addresses the emotional, mental, and physical dimensions of well-being.
          Join us on this transformative journey, where Our-Blues becomes a beacon of support, understanding, and empowerment for all.
        </p>
      </div>

      <div className="container" style={{ background: "linear-gradient(to right, #56A0D3, #003366)", padding: "20px", marginLeft: "10px", textAlign: "center", color: "#FFF", borderRadius: "10px", position: "relative", zIndex: 1, marginTop:"30px"}}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", fontFamily: "'Helvetica Neue'" }}>
          Find and Book Your Therapist Now
        </h2>
        <div className="booking-form" style={{ marginLeft: "10px" }}>
          <Input
            placeholder="Enter your city"
            value={city}
            onChange={(cityInput) => setCity(cityInput.target.value)}
          />
          <Input
            placeholder="Enter therapist's name"
            value={therapistName}
            onChange={(therapistInput) => setTherapistName(therapistInput.target.value)}
          />
          <Button type="primary" size="large" onClick={handleBooking} style={{ backgroundColor: "#003366", color: "#56A0D3", marginTop: "10px" }}>
            Book Therapist
          </Button>
        </div>
      </div>

      <div
        className="flex items-center justify-center m-5 bg-top blur-background"
        style={{backgroundImage: `url(${Icon})`,backgroundSize: "cover",minHeight: "50vh",position: "fixed",width: "210vh",height: "80vh",filter: "blur(40px)", zIndex: 0,}}></div>
      <div className="container" style={{ background: "linear-gradient(to right, white, #56A0D3)", padding: "10px", marginLeft: "20px", textAlign: "left", color: "#003366", borderRadius: "10px", position: "relative", zIndex: 1, marginTop: "50px", width: "300px" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "0.8rem", fontFamily: "'sans-serif'", color: "#003366" }}>
          Looking for more?
        </h2>
        <p style={{ fontSize: "1rem", color: "#003366", marginBottom: "0.5rem" }}>
          Explore our additional resources related to our app:
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "5px" }}>
          <Button type="link" style={{ color: "#003366", marginBottom: "5px", textAlign: "left" }} icon={<ReadOutlined />}>
            Read Mental Health Articles
          </Button>
          <Button type="link" style={{ color: "#003366", marginBottom: "5px", textAlign: "left" }} icon={<QuestionCircleOutlined />}>
            Ask a Question
          </Button>
          <Button type="link" style={{ color: "#003366", textAlign: "left" }} icon={<InfoCircleOutlined />}>
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

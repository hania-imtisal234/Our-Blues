import React, { useState } from "react";
import { Layout, Button, FloatButton, Avatar,Form } from "antd";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader.jsx";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter.jsx";
import nawal from "../../../assets/nawal.jpg";
import hania from "../../../assets/hania.png";
import hassaan from "../../../assets/hassaan.jpg";
import mentalHealth1 from "../../../assets/mentalHealth1.jpg";
import mentalHealth2 from "../../../assets/mentalHealth2.jpg";
import mentalHealth3 from "../../../assets/mentalHealth3.png";
import mentalHealth4 from "../../../assets/mentalHealth4.jpg";
import {
  ReadOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import {
  BOOK_MEETING,
  HEALTHBLOG,
  THERAPISTS,
  SELFCARE,
} from "../../../constants/Routes.js";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/Shared/FormInput/FormInput.jsx";
import { FormRule } from "../../../constants/formRules.js";
import FormButton from "../../../components/Shared/FormButton/FormButton.jsx";
import AppChatBot from "../../../components/Shared/AppChatbot/AppChatbot.jsx";

const Home = () => {
  const [city, setCity] = useState("");
  const [therapistName, setTherapistName] = useState("");
  const navigate = useNavigate();
  const [chatBotVisible, setChatBotVisible] = useState(false);

  const handleOpenChatBot = () => {
    setChatBotVisible(true);
  };

  const handleCloseChatBot = () => {
    setChatBotVisible(false);
  };
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const leaders = [
    {
      name: "Nawal Maqsood",
      image: nawal,
      description: "Co-Founder & CEO",
    },
    {
      name: "Hassaan Ahmed",
      image: hassaan,
      description: "Co-Founder & CEO",
    },
    {
      name: "Hania Imtisal",
      image: hania,
      description: "Co-Founder & CEO",
    },
  ];

  return (
    <Layout className="mainLayout bg-white h-screen">
      <WebHeader />

      <div className="text-center p-10 z-1 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold font-sans mb-2">
          <span className="text-shadow-lg text-yale-blue">Our Blues</span>
        </h1>
        <p className="font-sans text-bold text-lg text-carolina-blue">
          Within Our-Blues, we illuminate the path to mental wellness, offering
          a safe harbor for self-discovery, healing, and the empowering embrace
          of your unique journey towards inner balance. Our platform is designed
          to offer expert guidance from certified therapists, fostering a
          holistic approach that addresses the emotional, mental, and physical
          dimensions of well-being. Join us on this transformative journey,
          where Our-Blues becomes a beacon of support, understanding, and
          empowerment for all.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-x-4 p-6 lg:gap-x-20">
        <div className="h-auto md:w-1/2 lg:w-1/3 rounded-lg bg-gradient-to-r from-yale-blue to-carolina-blue p-6 md:p-10 text-center text-white mb-4 md:mb-0">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4 font-sans text-white">
            Find and Book Your Therapist Now
          </h2>
          <div className="booking-form md:ml-0 ml-2">
            <Form
              name="basic"
              layout="vertical"
              className="flex flex-col items-center"
            >
              <FormInput
                name="city"
                type="text"
                label="City"
                rules={FormRule.CITY}
                size="large"
                placeholder="Enter your city"
                value={city}
                onChange={(cityInput) => setCity(cityInput.target.value)}
              />
              <FormInput
                name="name"
                type="text"
                label="Name"
                rules={FormRule.NAME}
                size="large"
                placeholder="Enter therapist's name"
                value={therapistName}
                onChange={(therapistInput) =>
                  setTherapistName(therapistInput.target.value)
                }
              />
              <FormButton
                label="Book Therapist"
                className="xs:w-44 sm:w-56 text-white border-white bg-yale-blue w-56 h-24 mt-4"
                onClick={() => {
                  navigate(THERAPISTS);
                }}
              />
            </Form>
          </div>
        </div>

        <div className="h-auto md:w-1/2 lg:w-1/3 rounded-lg bg-gradient-to-r from-yale-blue to-carolina-blue text-left text-white p-6 md:p-10">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4 font-sans text-center mt-4">
            Looking for more?
          </h2>
          <div className="grid grid-cols-1  text-font-sans gap-y-2 md:gap-y-0">
            <Button
              type="link" className="text-white text-base md:text-lg my-2" icon={<ReadOutlined />} onClick={() => {navigate(HEALTHBLOG);}}>
              Read Mental Health Articles
            </Button>
            <Button
              type="link" className="text-white text-base md:text-lg my-2" icon={<QuestionCircleOutlined />} onClick={handleOpenChatBot} >
              Ask a Question
            </Button>
            <Button
              type="link" className="text-white text-base md:text-lg my-2" icon={<InfoCircleOutlined />} onClick={() => {navigate(SELFCARE);}}>
              Self-care Activities
            </Button>
          </div>
        </div>
      </div>

      <div className="whyOurBluesSection text-yale-blue font-bold p" style={{ padding: "60px 60px 60px", background: "#f0f2f5" }}>
        <h2 className="sectionTitle" style={{ fontSize: "1.5rem", marginBottom: "20px", textAlign: "center", color: "#002d62" }}>Why Our Blues?</h2>
        <div className="whyOurBluesGrid" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <div className="whyOurBluesCard" style={{ padding: "20px", background: selectedCard === 0 ? "rgba(0, 0, 0, 0.2)" : "#fff", border: selectedCard === 0 ? "2px solid #002d62" : "2px solid #00468b", borderRadius: "10px", textAlign: "center", cursor: "pointer" }} onClick={() => handleCardClick(0)}>
            <img src={mentalHealth1} alt="Support Group" style={{ width: "150px", height: "150px", borderRadius: "10px", marginBottom: "10px" }} />
            <h3 style={{ fontSize: "1.2rem", color: "#002d62" }}>Support Group</h3>
          </div>
          <div className="whyOurBluesCard" style={{ padding: "20px", background: selectedCard === 1 ? "rgba(0, 0, 0, 0.2)" : "#fff", border: selectedCard === 1 ? "2px solid #002d62" : "2px solid #00468b", borderRadius: "10px", textAlign: "center", cursor: "pointer" }} onClick={() => handleCardClick(1)}>
            <img src={mentalHealth2} alt="Online Consultation" style={{ width: "150px", height: "150px", borderRadius: "10px", marginBottom: "10px" }} />
            <h3 style={{ fontSize: "1.2rem", color: "#002d62" }}>Online Consultation</h3>
          </div>
          <div className="whyOurBluesCard" style={{ padding: "20px", background: selectedCard === 2 ? "rgba(0, 0, 0, 0.2)" : "#fff", border: selectedCard === 2 ? "2px solid #002d62" : "2px solid #00468b", borderRadius: "10px", textAlign: "center", cursor: "pointer" }} onClick={() => handleCardClick(2)}>
            <img src={mentalHealth3} alt="Secure Payment" style={{ width: "150px", height: "150px", borderRadius: "10px", marginBottom: "10px" }} />
            <h3 style={{ fontSize: "1.2rem", color: "#002d62" }}>Secure Payment</h3>
          </div>
          <div className="whyOurBluesCard" style={{ padding: "20px", background: selectedCard === 3 ? "rgba(0, 0, 0, 0.2)" : "#fff", border: selectedCard === 3 ? "2px solid #002d62" : "2px solid #00468b", borderRadius: "10px", textAlign: "center", cursor: "pointer" }} onClick={() => handleCardClick(3)}>
            <img src={mentalHealth4} alt=" Chatbot" style={{ width: "150px", height: "150px", borderRadius: "10px", marginBottom: "10px" }} />
            <h3 style={{ fontSize: "1.2rem", color: "#002d62" }}> Chatbot</h3>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4 text-yale-blue">Meet the leaders at Our-Blues</h2>
          <p className="text-center text-sm font-bold mb-6 text-carolina-blue">
            Our-Blues is led, designed, and managed by a diverse group of individuals driven by a common mission - to deliver the best mental healthcare to anyone who needs it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <Avatar
                  size={150}
                  src={leader.image}
                  style={{ marginBottom: '10px' }}
                />
                <p className="text-lg font-bold mb-1 text-yale-blue">{leader.name}</p>
                <p className="text-sm text-yale-blue">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <Layout style={{ marginTop: "8vh" }}>
        <FloatButton icon={<WechatOutlined />} onClick={handleOpenChatBot} />
        <AppChatBot visible={chatBotVisible} onClose={handleCloseChatBot} />
      </Layout>
      <Layout style={{ marginTop: "10vh" }}>
        <AppFooter />
      </Layout>
    </Layout>
  );
};



export default Home;

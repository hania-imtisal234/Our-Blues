import React, { useState } from "react";
import { Layout, Button, FloatButton, Avatar, Form } from "antd";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader.jsx";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter.jsx";
import nawal from "../../../assets/nawal.jpg";
import hania from "../../../assets/hania.png";
import hassaan from "../../../assets/hassaan.jpg";
import mentalHealth1 from "../../../assets/mentalHealth1.jpg";
import mentalHealth2 from "../../../assets/mentalHealth2.jpg";
import mentalHealth3 from "../../../assets/mentalHealth3.png";
import mentalHealth4 from "../../../assets/mentalHealth4.jpg";
import mentalHealth5 from "../../../assets/Pink and white mental health modern instagram post.png";
import mentalHealth6 from "../../../assets/Blue Illustration Medical Service Flyer (2).png";
import mentalHealth7 from "../../../assets/Beige pink Minimalist Counseling Psychology Mental Health Instagram Post.png";
import mentalHealth8 from "../../../assets/Blue Yellow Illustration Group Chat Instagram Post.png";
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

      <div className="grid grid-cols-2 p-10 z-1 m-2 rounded">
        <div className="grid cols-span-1  rounded-lg">
          <div className=" p-6 z-1  m-4 rounded h-3/5">
            <h1 className="text-4xl text-center md:text-5xl font-bold font-sans mb-4 rounded-lg">
              <span className="text-shadow-lg  text-yale-blue">Our Blues</span>
            </h1>
            <div className="flex-justify-center items-center">
              <div className="flex justify-center text-2xl text-yale-blue my-4 font-bold">
                LET{`'`}S FIGHT&nbsp;
                <span className="text-carolina-blue"> YOUR&nbsp;</span> GHOSTS
                TOGETHER
              </div>
            </div>
            <p className="font-sans font-semibold text-lg text-yale-blue">
              Our mission is simple: to help you feel better, get better and
              stay better.
              <br></br>
              <br></br>
              Within Our-Blues, we illuminate the path to mental wellness,
              offering a safe harbor for self-discovery, healing, and the
              empowering embrace of your unique journey towards inner balance.
            </p>
          </div>
        </div>
        <div className="grid cols-span-1 ">
          <img
            src={mentalHealth5}
            alt="mental health"
            style={{ height: "400px", marginLeft: "50px" }}
          />
        </div>
      </div>

      <div
        className="whyOurBluesSection text-yale-blue font-bold "
        style={{ padding: "60px 60px 60px", background: "#00356B" }}
      >
        <h2
          className="sectionTitle font-bold text-4xl "
          style={{
            marginBottom: "5px",
            textAlign: "center",
            color: "#F5F5F5",
          }}
        >
          Why Our Blues?
        </h2>
        <div className="flex justify-center mb-6">
          <h3 className="font-semibold text-lg text-white align-center">
            Our platform is built by psychiatrists, therapists and mental health
            experts with immense global experience.
          </h3>
        </div>
        <div
          className="whyOurBluesGrid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            className="whyOurBluesCard"
            style={{
              padding: "20px",
              background: selectedCard === 0 ? "rgba(0, 0, 0, 0.2)" : "#fff",
              border:
                selectedCard === 0 ? "2px solid #002d62" : "2px solid #00468b",
              borderRadius: "10px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(0)}
          >
            <img
              src={mentalHealth1}
              alt="Support Group"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2rem", color: "#002d62" }}>
              Support Group
            </h3>
          </div>
          <div
            className="whyOurBluesCard"
            style={{
              padding: "20px",
              background: selectedCard === 1 ? "rgba(0, 0, 0, 0.2)" : "#fff",
              border:
                selectedCard === 1 ? "2px solid #002d62" : "2px solid #00468b",
              borderRadius: "10px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(1)}
          >
            <img
              src={mentalHealth2}
              alt="Online Consultation"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2rem", color: "#002d62" }}>
              Online Consultation
            </h3>
          </div>
          <div
            className="whyOurBluesCard"
            style={{
              padding: "20px",
              background: selectedCard === 2 ? "rgba(0, 0, 0, 0.2)" : "#fff",
              border:
                selectedCard === 2 ? "2px solid #002d62" : "2px solid #00468b",
              borderRadius: "10px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(2)}
          >
            <img
              src={mentalHealth3}
              alt="Secure Payment"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2rem", color: "#002d62" }}>
              Secure Payment
            </h3>
          </div>
          <div
            className="whyOurBluesCard"
            style={{
              padding: "20px",
              background: selectedCard === 3 ? "rgba(0, 0, 0, 0.2)" : "#fff",
              border:
                selectedCard === 3 ? "2px solid #002d62" : "2px solid #00468b",
              borderRadius: "10px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(3)}
          >
            <img
              src={mentalHealth4}
              alt=" Chatbot"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2rem", color: "#002d62" }}> Chatbot</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <h1 className="text-4xl text-center md:text-5xl font-bold font-sans mb-4 rounded-lg">
          <span className="text-shadow-lg  text-yale-blue">What we Offer?</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-0 p-16 z-1 m-2 rounded">
        <div className="grid cols-span-1  rounded-lg">
          <div className="flex justify-center ml--10">
            <img
              src={mentalHealth6}
              alt="mental health"
              className="rounded-s-full rounded-e-full"
              style={{ height: "400px", marginLeft: "50px" }}
            />
          </div>
        </div>
        <div className="grid cols-span-1 w-2/3">
          <div className="">
            <h1 className="text-xl  md:text-5xl font-bold font-sans  rounded-lg">
              <span className="text-shadow-lg  text-yale-blue">
                Therapy & Psychiatry
              </span>
            </h1>
            <p className="flex justify-center mt-10 font-sans font-semibold text-lg text-yale-blue">
              Our in-house team of mental health therapist and psychiatrists is
              highly qualified and trained to deliver quality and compassionate
              clinical treatment.<br></br>
              <br></br> Our team follows proprietary clinical protocols &
              undergoes peer supervision to ensure each individual gets
              exceptional care, either online or in person.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0 p-16 z-1 m-2 rounded">
        <div className="grid cols-span-1  rounded-lg">
          <div className="ml-16">
            <h1 className="text-xl  md:text-5xl font-bold font-sans  rounded-lg">
              <span className="text-shadow-lg  text-yale-blue">
                Read Health Articles
              </span>
            </h1>
            <p className="flex justify-center mt-10 mr-16 font-sans font-semibold text-lg text-yale-blue">
              Our in-house team provides access to authentic mental health
              articles. Reading these articles will help you have better
              knowledge about mental health.<br></br>
              <br></br>
              Explore our curated collection of authentic mental health articles
              crafted by our in-house team. Gain valuable insights and practical
              tips to enhance your understanding and support your mental
              well-being journey
            </p>
          </div>
        </div>
        <div className="grid cols-span-1 w-2/3">
          <div className="flex justify-center ">
            <img
              src={mentalHealth7}
              alt="mental health"
              className="rounded-s-full rounded-e-full"
              style={{ height: "400px", marginLeft: "50px" }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0 p-16 z-1 m-2 rounded">
        <div className="grid cols-span-1  rounded-lg">
          <div className="flex justify-center ml--10">
            <img
              src={mentalHealth8}
              alt="mental health"
              className="rounded-s-full rounded-e-full"
              style={{ height: "400px", marginLeft: "50px" }}
            />
          </div>
        </div>
        <div className="grid cols-span-1 w-2/3">
          <div className="">
            <h1 className="text-xl  md:text-5xl font-bold font-sans  rounded-lg">
              <span className="text-shadow-lg  text-yale-blue">
                Support Group
              </span>
            </h1>
            <p className="flex justify-center mt-10 font-sans font-semibold text-lg text-yale-blue">
              Join our supportive community groups for enriching discussions and
              connections with others who understand and empathize with your
              experiences. Engage in meaningful conversations, share insights,
              and find solace in a safe and understanding environment, fostering
              a sense of belonging and mutual support.
            </p>
          </div>
        </div>
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
              type="link"
              className="text-white text-base md:text-lg my-2 cursor-pointer"
              icon={<ReadOutlined />}
              onClick={() => {
                navigate(HEALTHBLOG);
              }}
            >
              Read Mental Health Articles
            </Button>
            <Button
              type="link"
              className="text-white text-base md:text-lg my-2"
              icon={<QuestionCircleOutlined />}
              onClick={handleOpenChatBot}
            >
              Ask a Question
            </Button>
            <Button
              type="link"
              className="text-white text-base md:text-lg my-2"
              icon={<InfoCircleOutlined />}
              onClick={() => {
                navigate(SELFCARE);
              }}
            >
              Self-care Activities
            </Button>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4 text-yale-blue">
            Meet the leaders at Our-Blues
          </h2>
          <p className="text-center text-sm font-bold mb-6 text-carolina-blue">
            Our-Blues is led, designed, and managed by a diverse group of
            individuals driven by a common mission - to deliver the best mental
            healthcare to anyone who needs it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {leaders.map((leader, index) => (
              <div key={index} className="text-center">
                <Avatar
                  size={150}
                  src={leader.image}
                  style={{ marginBottom: "10px" }}
                />
                <p className="text-lg font-bold mb-1 text-yale-blue">
                  {leader.name}
                </p>
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

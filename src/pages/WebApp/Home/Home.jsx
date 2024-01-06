import React, { useState } from "react";
import { Layout, Button, Form } from "antd";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader.jsx";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter.jsx";
import {
  ReadOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { BOOK_MEETING } from "../../../constants/Routes.js";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/Shared/FormInput/FormInput.jsx";
import { FormRule } from "../../../constants/formRules.js";
import FormButton from "../../../components/Shared/FormButton/FormButton.jsx";

const Home = () => {
  const [city, setCity] = useState("");
  const [therapistName, setTherapistName] = useState("");
  const navigate = useNavigate();

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
                  navigate(BOOK_MEETING);
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
              className="text-white text-base md:text-lg my-2"
              icon={<ReadOutlined />}
            >
              Read Mental Health Articles
            </Button>
            <Button
              type="link"
              className="text-white text-base md:text-lg my-2"
              icon={<QuestionCircleOutlined />}
            >
              Ask a Question
            </Button>
            <Button
              type="link"
              className="text-white text-base md:text-lg my-2"
              icon={<InfoCircleOutlined />}
            >
              About Us
            </Button>
          </div>
        </div>
      </div>

      <Layout style={{ marginTop: "10vh" }}>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default Home;

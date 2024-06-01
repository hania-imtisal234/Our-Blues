// Login.jsx

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Layout } from "antd";
import FormInput from "../../../components/Shared/FormInput/FormInput";
import FormButton from "../../../components/Shared/FormButton/FormButton.jsx";
import OurBlueLogo from "../../../assets/Logo.png";
import { FormRule } from "../../../constants/formRules";
import AppHeader from "../../../components/Backoffice/AppHeader/AppHeader.jsx";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter.jsx";
import Loader from "../../../components/Shared/Loader/Loader.jsx";
import { WEBAPP_REGISTER } from "../../../constants/Routes.js";
import { toast } from "react-toastify";
import axios from "axios";
import AppContext from "../../../context/AppContext.js";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const appContext = useContext(AppContext);
  const { setRole, setLoggedIn, setUserInfo } = appContext;
  const navigate = useNavigate();
  const handleError = (err) =>
    toast.error(err, {
      position: "top-center",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-center",
    });

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      const { data } = response;

      if (data && data.success) {
        handleSuccess(data.message);

        if (data) {
          const userDetails = await fetchUserDetails(values.email);

          if (userDetails) {
            setUserInfo({
              userEmail: values.email,
            });
            localStorage.setItem(
              "userInfo",
              JSON.stringify({
                userEmail: values.email,
              })
            );
          }
        }

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        handleError(data ? data.message : "Unknown error");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error during login:", error);
      handleError("An error occurred during login");
    }
  };

  const fetchUserDetails = async (email) => {
    try {
      const response = await axios.get(
        "http://localhost:4000/getUsersByEmail",
        {
          withCredentials: true,
          params: {
            email: email,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return null;
    }
  };

  return (
    <Layout className="mainLayout bg-sea-salt h-full">
      <AppHeader />
      <div className="flex items-center justify-center m-7">
        <div className="xs:w-56 sm:w-72 px-10 pt-5 pb-5 rounded-2xl bg-carolina-blue">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <Form
              name="basic"
              layout="vertical"
              className="flex flex-col items-center"
              onFinish={handleLogin}
            >
              <div className="w-18 h-16 text-left">
                <img src={OurBlueLogo} alt="logo" className="xs:h-18 xs:h-16" />
              </div>
              <p className="xs:text-sm xs:w-44 sm:text-lg sm:w-48 flex items-center justify-center text-yale-blue text-2xl font-bold mb-2 mt-0">
                Log into your account
              </p>
              <FormInput
                name="email"
                type="text"
                label="Email"
                rules={FormRule.EMAIL}
                size="middle"
                placeholder="Enter your email"
              />
              <FormInput
                name="password"
                type="password"
                label="Password"
                rules={FormRule.PASSWORD}
                size="middle"
                placeholder="Enter your password"
              />
              <div className="">
                <FormButton
                  label="Login"
                  className="xs:w-44 sm:w-56 text-white bg-yale-blue w-56 h-24 mt-4"
                />
              </div>
              <div>
                Dont have an account?{" "}
                <Link
                  className="text-white font-bold underline"
                  to={WEBAPP_REGISTER}
                >
                  Register
                </Link>
              </div>
            </Form>
          )}
        </div>
      </div>
      <Layout>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default Login;

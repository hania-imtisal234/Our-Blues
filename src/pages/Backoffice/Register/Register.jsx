import React, { useState } from "react";
import { Form, Layout } from "antd";
import { Link } from "react-router-dom";
import FormInput from "../../../components/Shared/FormInput/FormInput";
import FormButton from "../../../components/Shared/FormButton/FormButton.jsx";
import OurBlueLogo from "../../../assets/Logo.png";
import { FormRule } from "../../../constants/formRules";
import AppHeader from "../../../components/Shared/AppHeader/AppHeader.jsx";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter.jsx";
import Loader from "../../../components/Shared/Loader/Loader.jsx";
import FormSelect from "../../../components/Shared/FormSelect/FormSelect.jsx";
import AppUploader from "../../../components/Shared/AppUploader/AppUploader.jsx";
import { BACKOFFICE_LOGIN } from "../../../constants/Routes.js";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      console.log(values);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error);
    }
  };
  return (
    <div>
      <Layout className="mainLayout bg-sea-salt">
        <AppHeader />
        <div className="flex items-center justify-center m-5">
          <div className="xs:w-56 sm:w-96  px-5 pt-5 pb-5 rounded-2xl bg-carolina-blue">
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
                  <img
                    src={OurBlueLogo}
                    alt="logo"
                    className="xs:h-18 xs:h-16 "
                  />
                </div>
                <p className="xs:text-sm xs:w-44 sm:text-lg sm:w-48 flex items-center justify-center text-yale-blue text-2xl font-bold ">
                  Register to OurBlues
                </p>
                <div className="flex gap-2 justify-between">
                  <FormInput
                    name="email"
                    type="text"
                    label="Email"
                    rules={FormRule.EMAIL}
                    size="middle"
                    placeholder="Enter your email"
                    classNames="w-[100%]"
                  />
                  <FormInput
                    name="phoneNumber"
                    label="Phone"
                    rules={FormRule.PHONENUMBER_NOT_REQUIRED}
                    placeholder="Enter your phone number"
                    size="middle"
                    classNames="w-[100%]"
                  />
                </div>
                <div className="flex gap-2 justify-between">
                  <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    rules={FormRule.PASSWORD}
                    size="middle"
                    placeholder="Enter your password"
                    classNames="w-[90]"
                  />
                  <FormInput
                    name="confirm"
                    type="password"
                    label="Confirm Password"
                    rules={FormRule.CONFIRM_PASSWORD}
                    size="middle"
                    placeholder="Confirm your password"
                    classNames="w-[90]"
                  />
                </div>
                <div className="flex gap-2 justify-between">
                  <FormInput
                    name="firstName"
                    type="text"
                    label="FirstName"
                    rules={FormRule.FIRSTNAME}
                    placeholder="Enter your first name"
                    classNames="w-[100%]"
                  />
                  <FormInput
                    name="lastName"
                    type="text"
                    label="lastName"
                    rules={FormRule.LASTNAME}
                    placeholder="Enter your last name"
                    classNames="w-[100%] "
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <FormInput
                    name="age"
                    label="Age"
                    rules={FormRule.AGE}
                    placeholder="Enter your age"
                    classNames="w-[100%]"
                  />
                  <FormSelect
                    name="gender"
                    label="Gender"
                    className="w-[100%] border"
                    rules={FormRule.SELECT}
                    placeholder="Select gender"
                    options={[
                      {
                        label: "Male",
                        key: "male",
                        value: "male",
                      },
                      {
                        label: "Female",
                        key: "female",
                        value: "female",
                      },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <FormInput
                    name="location"
                    label="Location"
                    rules={FormRule.LOCATION}
                    className="w-[100px]"
                    size="middle"
                    type="text"
                    placeholder="Enter your location"
                  />
                  <AppUploader
                    name="license"
                    label="Uplaod License"
                    className="w-[100] p-0"
                  />
                </div>
                <div className="">
                  <FormButton
                    label={"Register"}
                    className="xs:w-44 sm:w-56 text-white bg-yale-blue w-56 h-24 mt-4"
                  />
                </div>
                <div>
                  Already have an account?{" "}
                  <Link
                    className="text-white font-bold underline"
                    to={BACKOFFICE_LOGIN}
                  >
                    Login
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
    </div>
  );
};

export default Register;

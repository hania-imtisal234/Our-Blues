import React from "react";
import { Form, Layout } from "antd";
import FormInput from "../../../components/Shared/FormInput/FormInput";
import FormButton from "../../../components/Shared/FormButton/FormButton.jsx";
import OurBlueLogo from "../../../assets/logo.png";
import { FormRule } from "../../../constants/formRules";
import AppHeader from "../../../components/Shared/AppHeader/AppHeader.jsx";
import AppFooter from "../../../components/Shared/AppFooter/AppFooter.jsx";

const Login = () => {
  const handleLogin = (values) => {
    console.log(values);
  };
  return (
    <Layout className="mainLayout bg-sea-salt">
      <AppHeader />
      <div className="flex items-center justify-center m-5">
        <div className="xs:w-56 sm:w-72 px-10 pt-5 pb-5 rounded-2xl bg-carolina-blue">
          <Form
            name="basic"
            layout="vertical"
            className="flex flex-col items-center"
            onFinish={handleLogin}
          >
            <div className="xs:h-28 w-24  sm:h-36 w-32 md: w-40 text-left">
              <img src={OurBlueLogo} alt="logo" className="xs:h-28 sm:h-32" />
            </div>
            <p className="xs: text-sm w-44 sm: text-lg w-48 flex items-center justify-center text-yale-blue text-2xl font-bold mb-2 mt-0">
              Log into your account
            </p>
            <FormInput
              name="email"
              label="Email"
              rules={FormRule.EMAIL}
              size="middle"
              placeholder="Enter your email"
            />
            <FormInput
              name="password"
              label="Password"
              rules={FormRule.PASSWORD}
              size="middle"
              placeholder="Enter your password"
            />
            <div className="">
              <FormButton
                label={"Login"}
                className="xs:w-44 sm:w-56 text-white bg-yale-blue w-56 h-24 mt-4"
              />
            </div>
          </Form>
        </div>
      </div>
      <AppFooter />
    </Layout>
  );
};

export default Login;

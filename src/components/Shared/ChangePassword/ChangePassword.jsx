import { Form } from "antd";
import React, { useState } from "react";
import { FormRule } from "../../../constants/formRules";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangePassword = async (values) => {
    console.log(values);
    setIsLoading(true);
    if (values.newPassword !== values.confirmNewPassword) {
      setErrorMessage("password and confirm password does not match.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex-col">
      <div className="flex justify-center">
        <p className="text-yale-blue py-10 font-bold  xs:text-2xl md:text-3xl ">
          Change Password
        </p>
      </div>
      <div className="flex justify-center">
        <Form layout="vertical" onFinish={handleChangePassword}>
          <FormInput
            label="New Password"
            rules={FormRule.PASSWORD}
            name="newPassword"
            type="password"
            placeholder="Enter New Password"
            onChange={() => {
              setErrorMessage("");
            }}
          />
          <FormInput
            label="Confirm New Password"
            rules={FormRule.PASSWORD}
            name="confirmNewPassword"
            type="password"
            placeholder="Rewrite New Password"
            onChange={() => {
              setErrorMessage("");
            }}
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
          <p className="font-bold text-yale-blue">
            Note: Commonly used passwords are not allowed.
          </p>

          <div className="flex justify-center">
            <FormButton
              label="Update"
              className="xs:w-44 sm:w-56 text-white bg-yale-blue w-56 h-24 mt-4"
              loading={isLoading}
              disabled={isLoading}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;

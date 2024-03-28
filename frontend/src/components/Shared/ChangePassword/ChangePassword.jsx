import { Form } from "antd";
import React, { useState, useEffect } from "react";
import { FormRule } from "../../../constants/formRules";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

var _id;

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const getID = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/therapist",
        {},
        { withCredentials: true }
      );
      _id = data.id;
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleChangePassword = async (values) => {
    console.log(values);
    const password = values.newPassword;
    setIsLoading(true);
    if (values.newPassword !== values.confirmNewPassword) {
      setErrorMessage("password and confirm password does not match.");
    } else {
      try {
        setIsLoading(true);
        const { data } = await axios.post(
          "http://localhost:4000/updatePassword",
          {
            _id,
            password,
          },
          { withCredentials: true }
        );
        console.log(data);
        const { success, message } = data;
        if (success) {
          handleSuccess(message);
        } else {
          handleError(message);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error(error);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getID();
    console.log(_id);
  });

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

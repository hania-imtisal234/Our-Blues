import { Form } from "antd";
import React, { useState } from "react";
import { FormRule } from "../../../constants/formRules";
import FormSelect from "../FormSelect/FormSelect";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [antForm] = Form.useForm();

  const handleEditProfile = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-col">
      <h1 className="flex justify-center text-yale-blue font-bold xs:text-2xl md:text-3xl p-4">
        Edit Profile
      </h1>
      <div className="flex justify-center items-center p-2">
        <Avatar size={60} icon={<UserOutlined />} className="cursor-pointer" />
      </div>
      <div className="flex justify-center items-center p-4">
        <Form layout="vertical" onFinish={handleEditProfile} form={antForm}>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="First Name"
              rules={FormRule.FIRSTNAME}
              name="firstName"
              type="text"
              placeholder="Enter first name"
              onChange={() => {}}
            />

            <FormInput
              label="Last Name"
              rules={FormRule.LASTNAME}
              name="lastName"
              type="text"
              placeholder="Enter last name"
              onChange={() => {}}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Email"
              rules={FormRule.EMAIL}
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={() => {}}
            />
            <FormInput
              label="Contact Number"
              rules={FormRule.PHONENUMBER}
              name="phoneNumber"
              type="text"
              placeholder="Enter contact number"
              onChange={() => {}}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
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
            <FormInput
              label="Age"
              type="text"
              rules={FormRule.AGE}
              name="age"
              placeholder="Enter age"
              onChange={() => {}}
            />
          </div>

          <div className="flex justify-center">
            <FormButton
              label="Update Profile"
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

export default EditProfile;

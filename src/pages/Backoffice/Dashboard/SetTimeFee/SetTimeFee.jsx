import React, { useState } from "react";
import { Form, TimePicker, DatePicker } from "antd";
import FormInput from "../../../../components/Shared/FormInput/FormInput";
import { FormRule } from "../../../../constants/formRules";
import FormButton from "../../../../components/Shared/FormButton/FormButton";
import dayjs from "dayjs";

const SetTimeFee = () => {
  const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onChangeTime = (time) => {
    setValue(time);
  };
  const onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleSubmit = async (values) => {
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
    <div className="flex-cols h-screen">
      <div className="flex justify-center">
        <h1 className=" text-yale-blue font-bold py-10 xs:text-2xl md:text-3xl ">
          Set Time & Fee for Appoitnment
        </h1>
      </div>
      <div className="flex justify-center space-x-8">
        <TimePicker
          value={value ? dayjs(value) : null}
          onChange={onChangeTime}
        />
        <DatePicker onChange={onChangeDate} />
      </div>
      <Form
        name="basic"
        layout="vertical"
        className="flex flex-col items-center"
        onFinish={handleSubmit}
      >
        <div className="flex justify-center py-5 ">
          <FormInput
            name="fees"
            type="text"
            label="Enter Fees"
            rules={FormRule.FEES}
            size="large"
            placeholder="Enter your amount"
          />
        </div>
        <div className="flex justify-center">
          <FormButton
            label="Submit"
            className="xs:w-44 sm:w-56 text-white bg-yale-blue w-56 h-24 "
          />
        </div>
      </Form>
    </div>
  );
};

export default SetTimeFee;

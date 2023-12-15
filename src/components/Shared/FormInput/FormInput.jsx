import React from "react";
import { Form, Input } from "antd";

const FormInput = ({
  name = null,
  classNames = " text-yale-blue mt--5 text-sm",
  size = "middle",
  type = "text",
  placeholder,
  onPressEnter = null,
  addonAfter,
  label,
  rules,
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules} className="m-0 text-sm ">
      <Input
        type={type}
        name={name}
        size={size}
        className={classNames}
        placeholder={placeholder}
        addonAfter={addonAfter}
        onPressEnter={onPressEnter}
      />
    </Form.Item>
  );
};

export default FormInput;

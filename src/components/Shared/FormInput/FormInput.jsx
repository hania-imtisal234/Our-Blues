import React from "react";
import { Form, Input } from "antd";

const FormInput = ({
  name = null,
  classNames = "xs:w-44 sm:w-56 text-yale-blue mt--5",
  size = "middle",
  placeholder,
  onPressEnter = null,
  prefix,
  postfix,
  label,
  rules,
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules} className="my-1">
      <Input
        name={name}
        size={size}
        className={classNames}
        placeholder={placeholder}
        prefix={prefix}
        postfix={postfix}
        onPressEnter={onPressEnter}
      />
    </Form.Item>
  );
};

export default FormInput;

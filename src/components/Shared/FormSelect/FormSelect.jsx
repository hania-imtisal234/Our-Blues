import React from "react";
import { Select, Form } from "antd";

const FormSelect = ({
  name,
  label,
  disabled,
  options,
  placeholder,
  className,
  size,
  dropdownStyle,
  mode,
  rules,
}) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Form.Item name={name} label={label} rules={rules}>
        <Select
          onChange={handleChange}
          disabled={disabled}
          options={options}
          placeholder={placeholder}
          className={className}
          size={size}
          dropdownStyle={dropdownStyle}
          mode={mode}
          rules={rules}
        />
      </Form.Item>
    </div>
  );
};

export default FormSelect;

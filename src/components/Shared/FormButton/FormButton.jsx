import React from "react";
import { Button, Form } from "antd";

function FormButton({
  label,
  type = "primary",
  className = "hover:bg-light-blue border-white",
  loading,
  disabled = false,
  size = "large",
  onClick = () => {},
}) {
  return (
    <>
      <Form.Item>
        <Button
          size={size}
          disabled={disabled}
          type={type}
          htmlType="submit"
          className={className}
          loading={loading}
          onClick={onClick}
        >
          {label}
        </Button>
      </Form.Item>
    </>
  );
}

export default FormButton;

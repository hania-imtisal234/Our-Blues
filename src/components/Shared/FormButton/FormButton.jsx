import React from "react";
import { Button, Form } from "antd";

function FormButton({
  label,
  type = "primary",
  className = "hover:bg-light-blue",
  loading,
  disabled = false,
  size = "large",
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
        >
          {label}
        </Button>
      </Form.Item>
    </>
  );
}

export default FormButton;

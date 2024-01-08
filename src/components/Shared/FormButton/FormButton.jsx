import React from "react";
import { Button, Form } from "antd";

function FormButton({
  label,
  type = "primary",
  className = "hover:bg-light-blue border-white",
  loading,
  contentFontSize,
  disabled = false,
  size = "large",
  icon,
  onClick = () => {},
}) {
  return (
    <>
      <Form.Item>
        <Button
          size={size}
          disabled={disabled}
          contentFontSize={contentFontSize}
          type={type}
          icon={icon}
          htmlType="submit"
          className={className}
          loading={loading}
          onClick={onClick}
          style={{ fontSize: contentFontSize }}
        >
          {label}
        </Button>
      </Form.Item>
    </>
  );
}

export default FormButton;

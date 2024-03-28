import React, { useState } from "react";
import { Button, Form } from "antd";

function FormButton({
  label,
  type = "primary",
  className = "hover:bg-light-blue border-white",
  disabled = false,
  size = "large",
  icon,
  onClick = () => {},
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick();
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form.Item>
        <Button
          size={size}
          disabled={disabled || loading}
          type={type}
          icon={icon}
          htmlType="submit"
          className={className}
          loading={loading}
          onClick={handleClick}
          style={{ fontSize: "middle" }}
        >
          {label}
        </Button>
      </Form.Item>
    </>
  );
}

export default FormButton;

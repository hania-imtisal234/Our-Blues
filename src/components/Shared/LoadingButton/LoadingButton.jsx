import React, { useState } from "react";
import { Button } from "antd";

const LoadingButton = ({
  buttonLabel,
  type = "primary",
  className = "hover:bg-light-blue border-white",
  shape = "default",
  size = "large",
  onClick = () => {},
  icon = null,
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (onClick) {
      setLoading(true);
      onClick(); // Call the onClick function passed as prop
      // Set loading to false after a timeout (simulating async action completion)
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }
  };

  return (
    <div>
      <Button
        shape={shape}
        type={type}
        size={size}
        className={className}
        onClick={handleClick}
        icon={icon}
        loading={loading}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default LoadingButton;

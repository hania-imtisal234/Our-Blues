import React from "react";
import { Card } from "antd";

const BasicCard = ({ size = "default", bodyStyle, title, logo, className }) => {
  return (
    <Card
      size={size}
      bodyStyle={bodyStyle}
      title={title}
      logo={logo}
      className={className}
    />
  );
};

export default BasicCard;

import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const AppFooter = () => {
  return (
    <div>
      <Footer
        style={{ textAlign: "center" }}
        className="bg-yale-blue text-white"
      >
        Our Blues ©2023 Where Ocean meets Inner Peace.
      </Footer>
    </div>
  );
};

export default AppFooter;

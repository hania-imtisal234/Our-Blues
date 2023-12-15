import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;
const AppFooter = () => {
  return (
    <div>
      <Footer
        style={{ textAlign: "center", maxHeight: "5vh" }}
        className="bg-yale-blue text-white flex items-center justify-center"
      >
        Our Blues ©2023 Where Ocean meets Inner Peace.
      </Footer>
    </div>
  );
};

export default AppFooter;

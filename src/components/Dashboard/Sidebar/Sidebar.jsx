import React, { useState } from "react";
import { adminMenuItems } from "../../../constants/index";
import { Layout, Menu } from "antd";
import OurBluesIcon from "../../../assets/Icon.png";
import { useNavigate } from "react-router-dom/dist";
const { Sider } = Layout;

const Sidebar = ({ className = "bg-yale-blue" }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = ({ item }) => {
    console.log(item.props.route);
    navigate(item.props.route);
  };

  return (
    <div className="bg-yale-blue" id="custom-sidebar">
      <Sider
        collapsible
        collapsed={collapsed}
        triggerBg="#00356B"
        onCollapse={(value) => setCollapsed(value)}
        className={className}
        breakpoint="md"
      >
        {!collapsed ? (
          <div className="flex items-center justify-center bg-yale-blue h-14 gap-2">
            <h1 className="text-white font-bold text-lg ">Our Blues</h1>
            <img
              src={OurBluesIcon}
              alt="Icon"
              className="w-12 my-1 h-[40px] object-contain ml-0 bg-carolina-blue rounded-full"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center bg-yale-blue h-14 gap-2">
            <img
              src={OurBluesIcon}
              alt="Icon"
              className="w-12 my-1 h-[40px] object-contain ml-0 bg-carolina-blue rounded-full"
            />
          </div>
        )}

        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          className={className}
          onClick={handleMenuClick}
          items={adminMenuItems}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;

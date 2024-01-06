import React, { useState } from "react";
import { Layout, Menu } from "antd";
import OurBluesIcon from "../../../../assets/Icon.png";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = ({ className = "bg-yale-blue", menuItems }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = ({ item }) => {
    console.log(item.props.route);
    navigate(item.props.route);
  };

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.subItems) {
        return (
          <Menu.SubMenu
            key={item.key}
            title={item.title}
            route={item.route}
            label={item.label}
            icon={item.icon}
            id="menuItems"
          >
            {renderMenuItems(item.subItems)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item
          key={item.key}
          title={item.title}
          route={item.route}
          label={item.label}
          icon={item.icon}
        >
          {item.label}
        </Menu.Item>
      );
    });
  };

  return (
    <div
      className={`bg-yale-blue ${
        collapsed ? "sticky top-0" : "sticky top-0 z-10"
      }`}
      id="custom-sidebar"
    >
      <Sider
        collapsible
        collapsed={collapsed}
        triggerBg="#00356B"
        onCollapse={(value) => setCollapsed(value)}
        className={className}
        breakpoint="md"
        style={{ position: "sticky", top: 0, zIndex: 10 }}
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

        <div className="demo-logo-vertical" id="menuItems" />
        <Menu
          mode="inline"
          className={className}
          onClick={handleMenuClick}
          style={{ color: "white" }}
        >
          {renderMenuItems(menuItems)}
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;

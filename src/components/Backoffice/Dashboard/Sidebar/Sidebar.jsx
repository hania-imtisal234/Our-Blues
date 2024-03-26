
import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import OurBluesIcon from "../../../../assets/Icon.png";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
import { DASHBOARD_ADMINSTATS } from "../../../../constants/Routes";

const Sidebar = ({ className = "bg-yale-blue", menuItems }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = ({ item }) => {
    console.log(item.props.route);
    navigate(item.props.route);
  };

  const handleStatsButtonClick = () => {
    navigate(DASHBOARD_ADMINSTATS); 
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
    <div className={`bg-yale-blue sticky top-0 ${collapsed ? "z-50" : "z-10"}`}>
      <div className="flex items-center justify-center bg-yale-blue h-14">
        {!collapsed && (
          <h1 className="text-white font-bold text-lg">Our Blues</h1>
        )}
        <img
          src={OurBluesIcon}
          alt="Icon"
          className="w-12 my-1 h-[40px] object-contain ml-0 bg-carolina-blue rounded-full"
        />
      </div>
      <Sider
        collapsible
        collapsed={collapsed}
        triggerBg="#00356B"
        onCollapse={(value) => setCollapsed(value)}
        className={className}
        breakpoint="md"
        style={{ position: "sticky", top: 0, zIndex: 10 }}
      >
        <Menu
          mode="inline"
          className={className}
          onClick={handleMenuClick}
          style={{ color: "white" }}
        >
          {renderMenuItems(menuItems)}
        </Menu>

        <div className="z-10 flex mt-4 ml-4">
          <Button type="primary" onClick={handleStatsButtonClick} style={{color:"white"}} mode="inline">
            Go to Stats
          </Button>
        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;

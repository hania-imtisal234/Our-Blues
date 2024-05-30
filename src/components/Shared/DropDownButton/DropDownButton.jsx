import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { useNavigate } from "react-router-dom";

const DropDownButton = ({
  className = "bg-yale-blue",
  MenuItems,
  buttonName,
}) => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    const route = MenuItems.find((item) => item.key === key).route;
    navigate(route);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {MenuItems.map((item) => (
        <Menu.Item key={item.key} route={item.route}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button className={className}>{buttonName}</Button>
    </Dropdown>
  );
};

export default DropDownButton;

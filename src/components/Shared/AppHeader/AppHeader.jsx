import React from "react";
import { Avatar } from "antd";
import OurBluesLogo from "../../../assets/Logo.png";
import CustomButton from "../CustomButton/CustomButton.jsx";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import MobileDrawer from "../MobileDrawer/MobileDrawer.jsx";
import { useNavigate } from "react-router";
import {
  BACKOFFICE_LOGIN,
  BACKOFFICE_REGISTER,
} from "../../../constants/Routes.js";

const AppHeader = () => {
  const [enableMenu, setEnableMenu] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };
  const onDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className="flex items-center justify-between px-4 py-1 bg-yale-blue sticky top-0 z-10">
      <img
        src={OurBluesLogo}
        alt="logo"
        className="xs:w-14 sm:w-[70px] my-1 h-[50px] object-contain ml-0 bg-carolina-blue rounded-full"
      />
      {!enableMenu ? (
        <></>
      ) : (
        <>
          <ul className="xs:hidden md:flex md:items-center md:justify-end  flex-1 gap-2 font-bold  text-white sm:text-xl mx-0 xs:text-sm mx-2 md:text-xl mx-4">
            <li>Dashboard</li>
          </ul>
        </>
      )}
      <div className="flex item-center justify-end">
        <div className=" xs:hidden md:flex  gap-2 ">
          <CustomButton
            buttonLabel="Login"
            className="bg-yale-blue text-white"
            size="middle"
            onClick={() => {
              navigate(BACKOFFICE_LOGIN);
            }}
          />
          <CustomButton
            buttonLabel="Register"
            className="bg-yale-blue text-white"
            size="middle"
            onClick={() => {
              navigate(BACKOFFICE_REGISTER);
            }}
          />
        </div>
        <div className="xs:hidden md:flex items-center gap-1 xs:gap-1 mx-1 ">
          <Avatar
            size={"middle"}
            icon={<UserOutlined />}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="md:hidden">
        <MenuOutlined className="text-white" onClick={showDrawer} />
      </div>
      <MobileDrawer onClose={onDrawerClose} isDrawerOpen={isDrawerOpen} />
    </div>
  );
};

export default AppHeader;

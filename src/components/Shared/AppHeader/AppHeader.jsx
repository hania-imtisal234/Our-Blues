import React, { useEffect } from "react";
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
  WEBAPP_LOGIN,
} from "../../../constants/Routes.js";

const AppHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
    setIsLoggedIn(storedUserInfo.loggedIn);
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    navigate(WEBAPP_LOGIN);
  };
  const showDrawer = () => {
    setIsDrawerOpen(true);
  };
  const onDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className="flex items-center justify-between px-4 py-1 bg-yale-blue sticky top-0 z-10">
      {!isLoggedIn ? (
        <>
          <img
            src={OurBluesLogo}
            alt="logo"
            className="xs:w-14 sm:w-[70px] my-1 h-[50px] object-contain ml-0 bg-carolina-blue rounded-full"
          />
          <div className="flex item-center justify-end">
            <div className=" xs:hidden md:flex  gap-2 ">
              <CustomButton
                buttonLabel="Login"
                className="bg-yale-blue text-white"
                size="middle"
                onClick={() => {
                  navigate(WEBAPP_LOGIN);
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
          </div>
        </>
      ) : (
        <>
          <ul className="h-10 xs:hidden md:flex md:items-center md:justify-end  flex-1 gap-2 font-bold  text-white sm:text-xl mx-0 xs:text-sm mx-2 md:text-xl mx-4">
            <li></li>
          </ul>
          <div className="flex item-center justify-end">
            <div>
              <CustomButton
                buttonLabel="Logout"
                className="bg-yale-blue text-white"
                size="middle"
                onClick={handleLogout}
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
        </>
      )}

      <div className="md:hidden">
        <MenuOutlined className="text-white" onClick={showDrawer} />
      </div>
      <MobileDrawer onClose={onDrawerClose} isDrawerOpen={isDrawerOpen} />
    </div>
  );
};

export default AppHeader;

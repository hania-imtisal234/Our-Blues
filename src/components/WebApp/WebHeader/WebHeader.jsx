import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import OurBluesLogo from "../../../assets/Logo.png";
import CustomButton from "../../Shared/CustomButton/CustomButton.jsx";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  LoginButtonOptions,
  RegisterButtonOptions,
} from "../../../constants/index.js";
import {
  HEALTHBLOG,
  HOME_PAGE,
  SELFCARE,
  SUPPORTGROUP,
  THERAPISTS,
  WEBAPP_LOGIN,
  WEBAPP_REGISTER,
} from "../../../constants/Routes.js";
import DropDownButton from "../../Shared/DropDownButton/DropDownButton.jsx";
import MobileDrawer from "../../Shared/MobileDrawer/MobileDrawer.jsx";

const WebHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (storedUserInfo) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    navigate(WEBAPP_LOGIN);
  };

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const onDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="flex fixed items-center justify-between px-4 py-1 bg-yale-blue sticky top-0 z-10">
      <div className="flex items-center gap-8">
        <img
          onClick={() => navigate(HOME_PAGE)}
          src={OurBluesLogo}
          alt="logo"
          className="lg:w-14 sm:w-[70px] my-1 h-[50px] object-contain ml-0 bg-carolina-blue rounded-full cursor-pointer"
        />
        <ul className="h-10 xs:hidden md:flex md:items-center md:justify-end flex-1 gap-6 text-white font-bold md:text-base sm:text-xl sm:mx-0 xs:text-sm xs:mx-2 mx-4">
          <a onClick={() => navigate(HOME_PAGE)}>
            <li>Home</li>
          </a>
          <a onClick={() => navigate(HEALTHBLOG)}>
            <li>Health Blog</li>
          </a>
          <a onClick={() => navigate(THERAPISTS)}>
            <li>Therapists</li>
          </a>
          <a onClick={() => navigate(SUPPORTGROUP)}>
            <li>Join Support Group</li>
          </a>
          <a onClick={() => navigate(SELFCARE)}>
            <li>Self Care</li>
          </a>
        </ul>
      </div>
      {!isLoggedIn ? (
        <div className="flex items-center gap-2">
          <DropDownButton
            className=" text-white"
            MenuItems={LoginButtonOptions}
            buttonName="Login"
          />
          <DropDownButton
            className=" text-white"
            MenuItems={RegisterButtonOptions}
            buttonName="Register"
          />
        </div>
      ) : (
        <div className="flex items-center gap-1 justify-end">
          <CustomButton
            buttonLabel="Logout"
            className="bg-yale-blue text-white"
            size="middle"
            onClick={handleLogout}
          />
          <div className="xs:hidden md:flex items-center gap-1 xs:gap-1 mx-1 ">
            <Avatar
              size="middle"
              icon={<UserOutlined />}
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
      <div className="md:hidden">
        <MenuOutlined className="text-white" onClick={showDrawer} />
      </div>
      <MobileDrawer onClose={onDrawerClose} isDrawerOpen={isDrawerOpen} />
    </div>
  );
};

export default WebHeader;

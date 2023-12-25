import React from "react";
import { Avatar } from "antd";
import OurBluesLogo from "../../../assets/Logo.png";
import CustomButton from "../CustomButton/CustomButton.jsx";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import MobileDrawer from "../MobileDrawer/MobileDrawer.jsx";
import { useNavigate } from "react-router";
import { WEBAPP_LOGIN, WEBAPP_REGISTER } from "../../../constants/Routes.js";

const WebHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const onDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleTherapistButtonClick = () => {
    console.log("Therapist button clicked");
  };

  return (
    <div className="flex items-center justify-between px-4 py-1 bg-yale-blue sticky top-0 z-10">
      <div className="flex items-center gap-8">
        <img
          src={OurBluesLogo}
          alt="logo"
          className="lg:w-14 sm:w-[70px] my-1 h-[50px] object-contain ml-0 bg-carolina-blue rounded-full"
        />
        <CustomButton
          buttonLabel="Health Blog"
          className="text-white hover:underline"
          size="middle"
        />
        <CustomButton
          buttonLabel="Therapists"
          className="text-white hover:underline"
          size="middle"
          onClick={handleTherapistButtonClick}
        />
      </div>
      {!isLoggedIn ? (
        <div className="flex items-center gap-2">
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
              navigate(WEBAPP_REGISTER);
            }}
          />
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <Avatar
            size={"middle"}
            icon={<UserOutlined />}
            className="cursor-pointer"
          />
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

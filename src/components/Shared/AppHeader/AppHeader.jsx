import React from "react";
import { Avatar } from "antd";
import OurBluesLogo from "../../../assets/logo.png";
import CustomButton from "../CustomButton/CustomButton.jsx";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
const AppHeader = () => {
  const [enableMenu, setEnableMenu] = useState(false);
  return (
    <div className="flex items-center justify-between px-4 py-1 bg-yale-blue">
      <img
        src={OurBluesLogo}
        alt="logo"
        className="xs:w-14 sm:w-32 my-1 h-[60px] object-contain ml-0 bg-carolina-blue rounded-full"
      />
      {!enableMenu ? (
        <>
          <ul className="flex items-center justify-end  flex-1 gap-2 font-bold  text-white sm:text-xl mx-0 xs:text-sm mx-2 md:text-xl mx-4">
            <li>Dashboard</li>
          </ul>
        </>
      ) : (
        <></>
      )}

      <div className="w-auto flex gap-2 xs:gap-1">
        <CustomButton
          buttonLabel="Login"
          className="bg-yale-blue text-white"
          size="middle"
        />
        <CustomButton
          buttonLabel="Register"
          className="bg-yale-blue text-white"
          size="middle"
        />
      </div>
      <div className="flex items-center gap-1 xs:gap-1 mx-1 ">
        <Avatar
          size={"middle"}
          icon={<UserOutlined />}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AppHeader;
